#!/usr/bin/env python3

import os
import datetime
import requests
from bluepy.btle import Scanner, DefaultDelegate, BTLEException

TARGET_COMPLETE_LOCAL_NAME = 'calyptratus'
SCAN_TIME_LENGTH = 10  # Scanning time length(sec)
TOKEN = os.getenv('SS_TOKEN')
POST_URL = 'https://sparkling-gecko.an.r.appspot.com/api/v1/item_values/new'
# どのタイムゾーンで投げても、API側でUTCに変換される
TIMEZONE = datetime.timezone(datetime.timedelta(hours=+9))


def print_scan_data(public_address, data):
    print('  Broadcast found!')
    print('    Seen           : ' + datetime.datetime.now().isoformat())
    print('    Public Address : ' + public_address)
    print('    Data           : ' + data)
    print()


def post_scan_data(public_address, data):
    headers = {'Authorization': 'Bearer {}'.format(TOKEN)}
    api_data = {
        'value': data,
        'observed_at': datetime.datetime.now(TIMEZONE).isoformat(timespec='milliseconds'),
        'item_id': 2  # TODO 取り敢えずハードコードだけど、プラットフォームとやり取りして決める
    }

    post_response = requests.post(POST_URL, headers=headers, json=api_data)

    print(post_response.status_code)
    print(post_response.json())


class ScanDelegate(DefaultDelegate):
    def handleDiscovery(self, scanEntry, isNewDev, isNewData):
        if scanEntry.getScanData()[0][2] == TARGET_COMPLETE_LOCAL_NAME:
            if isNewDev and isNewData:
                received_data = int(scanEntry.getScanData()[2][2], 16) / 100
                print_scan_data(scanEntry.addr, str(received_data))
                post_scan_data(scanEntry.addr, str(received_data))


def main():
    scanner = Scanner().withDelegate(ScanDelegate())

    while True:
        try:
            print('Scanning broadcast...')
            scanner.scan(float(SCAN_TIME_LENGTH), passive=True)
        except BTLEException:
            print(BTLEException)


if __name__ == '__main__':
    main()
