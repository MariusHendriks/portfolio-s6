var jp = require("jsonpath");

export function SortDataByWeek(data: any) {
  let formattedWeken: iWeek[] = [];

  const maxWeek = GetMaxWeek(data);

  for (let i = 1; i <= maxWeek; i++) {
    formattedWeken.push({
      weekNummer: i,
      documents: jp.query(data, "$..documents[?(@.week==" + i + ")]"),
    });
  }

  return formattedWeken;
}

export function SortDataByCourse(data: any) {
  let courses: iCourseReadingGuide[] = jp.query(data, "$..courses[*]");
  const documents: iDocument[] = GetAllDocuments(data);
  courses.forEach((course) => {
    course.learningGoals.forEach((learningGoal) => {
      let containedDocuments = documents.filter((document) =>
        document.learningGoals.find((item: any) => item.id === learningGoal.id)
      );
      console.log("containedDocuments :", containedDocuments);
      if (containedDocuments && containedDocuments.length > 0) {
        if (!learningGoal.documents) {
          learningGoal.documents = [];
        }

        learningGoal.documents = containedDocuments;
      }
    });
  });
  return courses;
}

function GetMaxWeek(data: any) {
  return Math.max(...jp.query(data, "$..documents..week"));
}

function GetAllDocuments(data: any) {
  return jp.query(data, "$..documents[*]");
}

// function GetAllLearningGoals(data: any) {
//   return jp.query(data, "$..courses..learningGoals[*]");
// }
