import React from "react";
import { Row, Col } from "react-bootstrap";
import DisplayStatus from "./DisplayStatus";
import {
  CREATED,
  CANCELED,
  RESTORED,
  COMPLETED,
} from "../../features/api/TaskStatusTypes";
import { Link } from "react-router-dom";

function Search({ search, status, isDelete }) {
  let content;
  //console.log(isDelete)
  if (isDelete) {
    content = (
      <Row>
        <Col>
          <form>
            <div className="form-outline mb-1">
              <input
                type="text"
                id="form1Example1"
                className="form-control"
                placeholder="keyword..."
                onChange={search}
              />
            </div>
          </form>
        </Col>
      </Row>
    );
  } else {
    content = (
      <Row>
        <Col sm={7}>
          <form>
            <div className="form-outline mb-1">
              <input
                type="text"
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset p-2 my-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="keyword"
                onChange={search}
              />
            </div>
          </form>
        </Col>
        <Col sm={1}>
          <Link onClick={() => status(COMPLETED)}>
            <DisplayStatus status={COMPLETED} />
          </Link>
        </Col>
        <Col sm={1}>
          <Link onClick={() => status(CANCELED)}>
            <DisplayStatus status={CANCELED} />
          </Link>
        </Col>
        <Col sm={1}>
          <Link onClick={() => status(RESTORED)}>
            <DisplayStatus status={RESTORED} />
          </Link>
        </Col>
        <Col sm={1}>
          <Link onClick={() => status(CREATED)}>
            <DisplayStatus status={CREATED} />
          </Link>
        </Col>
        <Col sm={1}>
          <Link onClick={() => status("")}>
            <DisplayStatus status={"RESET"} />
          </Link>
        </Col>
      </Row>
    );
  }

  return <>{content}</>;
}

export default Search;
