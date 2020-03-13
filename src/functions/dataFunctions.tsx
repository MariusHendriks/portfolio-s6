var jp = require("jsonpath");

export function SortDataByWeek(data: any) {
  let formattedWeken: iWeek[] = [];

  const maxWeek = GetMaxWeek(data);
  for (let i = 1; i <= maxWeek; i++) {
    formattedWeken.push({
      weekNummer: i,
      documenten: jp.query(data, "$..documenten[?(@.week==" + i + ")]")
    });
  }
  return formattedWeken;
}

export function SortDataByCourse(data: any) {
  let courses: iVakLeeswijzer[] = jp.query(data, "$..vakken[*]");
  const documents: iDocument[] = GetAllDocuments(data);
  courses.forEach(course => {
    course.leerdoelen.forEach(leerdoel => {
      let containedDocuments = documents.filter(document =>
        document.leerdoelen.includes(leerdoel.id)
      );

      if (containedDocuments && containedDocuments.length > 0) {
        if (!leerdoel.documenten) {
          leerdoel.documenten = [];
        }

        leerdoel.documenten = containedDocuments;
      }
    });
  });
  return courses;
}

function GetMaxWeek(data: any) {
  return Math.max(...jp.query(data, "$..documenten..week"));
}

function GetAllDocuments(data: any) {
  return jp.query(data, "$..documenten[*]");
}

// function GetAllLearningGoals(data: any) {
//   return jp.query(data, "$..vakken..leerdoelen[*]");
// }
