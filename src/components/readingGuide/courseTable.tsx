import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data?: iCourseReadingGuide;
}
const CourseTable: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <div className="o-table__container">
        <h3>{data.name}</h3>
        <div className="o-table">
          <div className="o-table__header">
            <div className="o-table__header__item o-table__left">Criteria</div>
            <div className="o-table__header__item">Bewijs</div>
          </div>
          {data.learningGoals.map(learningGoal => {
            return (
              <div key={learningGoal.id} className="o-table__row">
                <div className="o-table__row__learning_goal o-table__left">
                  {learningGoal.name}
                </div>
                <div className="o-table__right">
                  {typeof learningGoal.documents !== "undefined" &&
                  learningGoal.documents !== [] ? (
                    learningGoal.documents.map(document => {
                      return (
                        <div key={document.id}>
                          <Link to={`/documents/${document.id}`}>
                            <div>- {document.name}</div>
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
