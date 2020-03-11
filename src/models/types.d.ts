interface iDocument {
  naam: string;
  id: string;
  week: number;
}
interface iLeerdoel {
  naam: string;
  documenten: iDocument[];
}
interface iOnderwerp {
  naam: string;
  afkorting: string;
  leerdoelen: iLeerdoel[];
}
interface iWeek {
  weekNummer: number;
  documenten: iDocument[];
}
