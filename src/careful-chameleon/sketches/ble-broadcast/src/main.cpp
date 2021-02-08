#include <BLEDevice.h>
#include <BLEServer.h>
#include <M5Stack.h>
#include <HX711.h>

#define DEVICE_NAME "calyptratus"

const int SLEEPING_TIME = 3;                  // Deep Sleep time length (sec)
const int ADVERTISING_TIME = 3;               // Advertising time length (sec)

// Load cell configs
const int LOADCELL_DOUT_PIN = 2;
const int LOADCELL_SCK_PIN = 3;
const long DIV = 476;                         // TODO Calibration
const int ROUND = 30;                         // Number of repeated measurements to improve measurement accuracy

HX711 scale;
RTC_DATA_ATTR long offset = 0;                // in Slow Memory

void waitScaleReady() {
  while (true) {
    if (scale.is_ready()) {
      break;
    }
  }
}

void setOffset() {
  M5.Lcd.println("Zero point calibrating...");
  long tmp_offset = 0;
  for (int i = 0; i < ROUND; i++) {
    if (scale.is_ready()) {
      tmp_offset = tmp_offset + scale.read();
      waitScaleReady();
    }
  }
  offset = tmp_offset / ROUND;
}

float measureWeight() {
  long tmp_reading = 0;
  for (int i = 0; i < ROUND; i++) {
    if (scale.is_ready()) {
      tmp_reading = tmp_reading + scale.read();
      waitScaleReady();
    }
  }
  float reading = (tmp_reading / ROUND - (float)offset) / DIV;
  if (reading >= 0) {
    M5.Lcd.println("Measuring... data: " + String(reading));
    return reading;
  } else {
    M5.Lcd.println("Measurement failed! data: " + String(reading));
    return -1;
  }
}

void setAdvertisementData(BLEAdvertising *pAdvertising) {
  uint16_t data = (uint16_t)(measureWeight() * 100);            // User Payload (2byte)
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
  M5.Lcd.println("M5Stack launched.");

  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  if (offset == 0) {
    setOffset();
  }

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
