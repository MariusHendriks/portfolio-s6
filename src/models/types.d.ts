interface iDocument {
  name: string;
  id: string;
  week: number;
  description?: string;
  pdfName?: string;
  learningGoals: string[];
  link?: string;
  linkText?: string;
  link2?: string;
  linkText2?: string;
}
interface iWeek {
  weekNummer: number;
  documents: iDocument[];
}
interface iCourse {
  name: string;
  learningGoals: string[];
}
interface iData {
  documents: iDocument[];
  courses: iCourse[];
}
interface iDataReadingGuide {
  courses: iCourseReadingGuide[];
}
interface iCourseReadingGuide {
  name: string;
  afkorting: string;
  learningGoals: iLearningGoal[];
}
interface iLearningGoal {
  name: string;
  id: string;
  documents: iDocument[];
}
