#!/usr/bin/env python3

import datetime
from bluepy.btle import Scanner, DefaultDelegate, BTLEException

TARGET_COMPLETE_LOCAL_NAME = 'calyptratus'
SCAN_TIME_LENGTH = 10  # Scanning time length(sec)


def print_scan_data(public_address, data):
    print('  Broadcast found!')
    print('    Seen           : ' + datetime.datetime.now().isoformat())
    print('    Public Address : ' + public_address)
    print('    Data           : ' + data)
    print()


class ScanDelegate(DefaultDelegate):
    def handleDiscovery(self, scanEntry, isNewDev, isNewData):
        if scanEntry.getScanData()[0][2] == TARGET_COMPLETE_LOCAL_NAME:
            if isNewDev and isNewData:
                received_data = int(scanEntry.getScanData()[2][2], 16)
                print_scan_data(scanEntry.addr, str(received_data))


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
