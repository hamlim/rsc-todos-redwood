import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";
import { Document } from "./app/document";
import { Page as HandlePage } from "./app/pages/handle";
import { Page as IndexPage } from "./app/pages/index";

export default defineApp([
  render(Document, [route("/", IndexPage), route("/:handle", HandlePage)]),
]);
