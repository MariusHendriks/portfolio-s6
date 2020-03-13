interface iDocument {
  naam: string;
  id: string;
  week: number;
  beschrijving?: string;
  leerdoelen: string[];
}
interface iWeek {
  weekNummer: number;
  documenten: iDocument[];
}
interface iVak {
  naam: string;
  leerdoelen: string[];
}
interface iData {
  documenten: iDocument[];
  vakken: iVak[];
}
interface iDataLeeswijzer {
  vakken: iVakLeeswijzer[];
}
interface iVakLeeswijzer {
  naam: string;
  afkorting: string;
  leerdoelen: iLeerdoel[];
}
interface iLeerdoel {
  naam: string;
  id: string;
  documenten: iDocument[];
}
