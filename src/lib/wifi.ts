type WifiAuthenticationType = "WEP" | "WPA" | "nopass";

export interface WifiConfig {
  ssid: string;
  password?: string;
  type?: WifiAuthenticationType;
  hidden?: boolean;
}

function escapeTagValue(value: string): string {
  const n = value.replace(/[\\\;\:\,]/g, "\\$&");
  return n;
}

function encodeTag(tag: string, value?: string): string | null {
  return value ? `${tag}:${escapeTagValue(value)}` : null;
}

export function encodeWifiConfig(config: WifiConfig): string {
  const type = encodeTag("T", config.type);
  const ssid = encodeTag("S", config.ssid);
  const password = encodeTag("P", config.password);
  const hidden = encodeTag("H", config.hidden ? "true" : "");

  const payload = [type, ssid, password, hidden].filter(Boolean).join(";");

  return `WIFI:${payload};;`;
}
