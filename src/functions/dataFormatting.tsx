export default function SortDataByWeek(data: any) {
  let formattedWeken: iWeek[] = [];

  const Sort = (subject: iOnderwerp) => {
    subject.leerdoelen.forEach(leerdoel => {
      leerdoel.documenten.forEach(document => {
        let week = formattedWeken.find(w => w.weekNummer === document.week);
        if (!week) {
          let newWeek: iWeek = {
            weekNummer: document.week,
            documenten: [document]
          };
          formattedWeken.push(newWeek);
        } else {
          week.documenten.push(document);
        }
      });
    });
    formattedWeken.sort((w1, w2) => {
      if (w1.weekNummer < w2.weekNummer) {
        return -1;
      } else {
        return 1;
      }
    });
  };

  Sort(data.sco);
  Sort(data.pro);
  Sort(data.uxu);
  Sort(data.ded);

  return formattedWeken;
}
