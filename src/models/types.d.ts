interface iDocument {
  naam: string;
  id: string;
  week: number;
  beschrijving?: string;
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
interface iVakken {
  sco: iOnderwerp;
  pro: iOnderwerp;
  uxu: iOnderwerp;
  ded: iOnderwerp;
}
