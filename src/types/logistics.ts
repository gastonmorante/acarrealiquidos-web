export type LiquidCategory = 
  | "hazmat"          // Hidrocarburos y Químicos Peligrosos (SCT Clase 3, 8, 9)
  | "food_grade"      // Melaza, Aceites Vegetales, Jarabes (COFEPRIS)
  | "corrosive"       // Ácido Sulfúrico, Sosa Cáustica (Acero Inoxidable 316L)
  | "industrial_water";// Agua tratada, residual o de proceso industrial

export interface LiquidProduct {
  id: string;
  name: string;
  category: LiquidCategory;
  density: number; // kg/L (e.g., 1.4 for molasses, 0.85 for diesel)
  requiresInsulatedTank: boolean;
  hazmatClass?: string;
  recommendedMaterial: "Acero Inoxidable 316L" | "Acero Inoxidable 304" | "Acero al Carbón Grado SCT";
}

export type TankerConfiguration = 
  | "sencillo"  // 25,000 L a 31,000 L
  | "full";     // 45,000 L (Doble Semirremolque articulado)

export interface QuoteRequest {
  productId: string;
  productName: string;
  category: LiquidCategory;
  volumeLiters: number;
  originCity: string;
  destinationCity: string;
  estimatedDistanceKm: number;
  tankerType: TankerConfiguration;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
}

export interface QuoteCalculationResult {
  baseRateMxn: number;
  fuelSurchargeMxn: number;
  tollFeesMxn: number;
  subtotalMxn: number;
  taxIvaMxn: number;
  totalMxn: number;
  estimatedHours: number;
  co2SavedKg: number;
  recommendedTankers: number;
  tankerType: TankerConfiguration;
}

export type OrderStatus = 
  | "confirmed"   // Confirmado en Central Amatlán
  | "loading"     // En Bahía de Carga / Terminal
  | "in_transit"  // En Tránsito Carretero Monitoreado
  | "at_terminal" // Arribo a Planta Destino / Maniobras
  | "delivered";  // Descarga Concluida y Certificada

export interface LiveTelemetry {
  currentSpeedKmH: number;
  cargoTemperatureC: number;
  tankLevelPercent: number;
  dischargePressureBar: number;
  latitude: number;
  longitude: number;
  lastPingTimestamp: string;
  batteryHealthPercent: number;
  geofenceStatus: "dentro_de_ruta" | "desvio_menor" | "zona_segura";
}

export interface DriverInfo {
  id: string;
  name: string;
  licenseNumber: string;
  licenseType: "SCT Tipo E (Materiales Peligrosos)" | "SCT Tipo B";
  yearsExperience: number;
  phoneNumber: string;
  photoUrl: string;
  unitPlateNumber: string;
  tractorModel: string;
}

export interface ActiveDeliveryOrder {
  id: string;
  trackingCode: string; // e.g. "ACQ-8126-MX"
  status: OrderStatus;
  productName: string;
  category: LiquidCategory;
  volumeLiters: number;
  origin: {
    city: string;
    terminal: string;
    coordinates: [number, number];
  };
  destination: {
    city: string;
    plantName: string;
    coordinates: [number, number];
  };
  departureTime: string;
  estimatedArrivalTime: string;
  progressPercent: number;
  telemetry: LiveTelemetry;
  driver: DriverInfo;
  remisionUrl?: string;
}
