import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

interface Props {
  data?: iCourseReadingGuide;
}
const CourseTable: React.FC<Props> = ({ data }) => {
  console.log("data :", data);
  if (typeof data !== "undefined") {
    return (
      <div className="o-table__container">
        <div className="o-table">
          <h2>{data.name}</h2>
          <div className="o-table__header">
            <div className="o-table__header__item o-table__left">Criteria</div>
            <div className="o-table__header__item">Bewijs</div>
          </div>
          {data.learningGoals.map((learningGoal) => {
            console.log("learningGoal :", learningGoal);
            return (
              <div key={learningGoal.id} className="o-table__row">
                <div className="o-table__row__learning_goal o-table__left">
                  {learningGoal.name}
                </div>
                <div className="o-table__right">
                  {typeof learningGoal.documents !== "undefined" &&
                  learningGoal.documents !== [] ? (
                    learningGoal.documents.map((document: any) => {
                      return (
                        <div key={document.id}>
                          <Link to={`/page/${document.page}`}>
                            <div
                              data-tip={
                                document.learningGoals.find(
                                  (item: any) => item.id === learningGoal.id
                                ).why
                              }
                            >
                              - {document.name}
                            </div>
                            <ReactTooltip />
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};
export default CourseTable;
