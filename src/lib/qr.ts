import { get } from "svelte/store";
import { generateVCard } from "@/lib/vcard";
import { qrType } from "./stores";
import { TYPES } from "./constants";

import qrCode from "qrcode-generator";
import { encodeWifiConfig, type WifiConfig } from "./wifi";

export function generateQr(data: string | object | WifiConfig) {
  const type = get(qrType);
  let cleanData = data;

  if (type === TYPES.VCARD) cleanData = generateVCard(data as string);
  if (type === TYPES.EMAIL) cleanData = `mailto:${data}`;
  if (type === TYPES.PHONE) cleanData = `tel:${data}`;
  if (type === TYPES.WHATSAPP) cleanData = `https://wa.me/${data}`;
  if (type === TYPES.WIFI) cleanData = encodeWifiConfig(data as WifiConfig);

  const typeNumber = 0;
  const errorCorrectionLevel = "L";
  const qr = qrCode(typeNumber, errorCorrectionLevel);

  qr.addData(cleanData as string);
  qr.make();

  return qr.createSvgTag(4);
}
