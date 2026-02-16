export interface TracerouteHop {
  hop: number;
  ip: string;
  hostname: string;
  location: string;
  lat: number;
  lng: number;
  rtt: string; // Round trip time simulation
  description: string;
  mapsUri?: string; // From Google Maps Grounding
  color?: string; // Color for UI visualization
  cableName?: string; // Name of the submarine cable used (e.g., MAREA, TAT-14)
  isSatellite?: boolean; // Is this a satellite link?
  satelliteName?: string; // e.g., "Starlink LEO", "Viasat", "Iridium"
  
  // New Educational Metrics
  packetLoss: number; // Percentage 0-100
  packetsSent: number; // Usually 3
  packetsReceived: number; 
  asn: string; // Autonomous System Number (e.g., AS8151)
  isp: string; // Organization Name (e.g., Uninet, Cogent)
  jitter: string; // Latency variation (e.g., "2.4ms")
}

export interface WhoisData {
  domain: string;
  registrar: string;
  creationDate: string;
  expiryDate: string;
  nameServers: string[];
  registrantCountry: string;
  registrantCity?: string;
  lat?: number;
  lng?: number;
  mapsUri?: string;
  rawText: string;
}

export type AnalysisType = 'traceroute' | 'whois';

export interface AnalysisResult {
  type: AnalysisType;
  traceroute?: TracerouteHop[];
  whois?: WhoisData;
  rawAnalysis?: string; // The text response from Gemini
}