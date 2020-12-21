#include <BLEDevice.h>
#include <BLEServer.h>
#include <M5Stack.h>

#define DEVICE_NAME "calyptratus"

const int SLEEPING_TIME = 3;                  // Deep Sleep time length (sec)
const int ADVERTISING_TIME = 3;               // Advertising time length (sec)

void setAdvertisementData(BLEAdvertising *pAdvertising) {
  uint16_t data = (uint16_t)2047;             // User Payload (2byte)
  std::string strData = "";
  strData += (char)0xff;                      // AD Type (Manufacturer Specific Data)
  strData += (char)((data >> 8) & 0xff);      // User Payload High byte
  strData += (char)(data & 0xff);             // User Payload Low byte
  strData = (char)strData.length() + strData; // Length (AdvertisementData PDU)
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  oAdvertisementData.setName(DEVICE_NAME);
  oAdvertisementData.setFlags(0x06);          // LE General Discoverable Mode | BR_EDR_NOT_SUPPORTED
  oAdvertisementData.addData(strData);
  pAdvertising->setAdvertisementData(oAdvertisementData);
}

void setup() {
  M5.begin();
  M5.Power.begin();

  // Suppress noise caused by electronic noise.
  M5.Speaker.begin();
  M5.Speaker.mute();

  M5.Lcd.println("M5Stack launched.");

  BLEDevice::init(DEVICE_NAME);
  BLEServer *pServer = BLEDevice::createServer();
  BLEAdvertising *pAdvertising = pServer->getAdvertising();
  setAdvertisementData(pAdvertising);

  pAdvertising->start();
  M5.Lcd.println("Advertising...");
  delay(ADVERTISING_TIME * 1000);
  pAdvertising->stop();

  esp_deep_sleep(SLEEPING_TIME * 1000000LL);
}

void loop() {}
