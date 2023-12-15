import http from "../http-common";

export default function TutorialDataService () {
  getAll() {
    return http.get("/tutorials");
  }
}