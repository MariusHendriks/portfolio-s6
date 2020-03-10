import React from "react";

interface expectedLeerdoel {
  naam: string;
  data: Array<string>;
}
interface expectedProp {
  naam: string;
  afkorting: string;
  leerdoelen: expectedLeerdoel[];
}
interface Props {
  data?: expectedProp;
}
const CourseTable: React.FC<Props> = ({ data }) => {
  console.log("data :", data);
  if (typeof data !== "undefined") {
    return (
      <div className="o-table__container">
        <h3>{data.naam}</h3>
        <div className="o-table">
          <div className="o-table__header">
            <div className="o-table__header__item o-table__left">Criteria</div>
            <div className="o-table__header__item">Bewijs</div>
          </div>
          {data.leerdoelen.map(leerdoel => {
            return (
              <div className="o-table__row">
                <div className="o-table__row__leerdoel o-table__left">
                  {leerdoel.naam}
                </div>
                <div>
                  {leerdoel.data.map(item => {
                    return <div>{item}</div>;
                  })}
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
