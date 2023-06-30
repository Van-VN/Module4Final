import StudentController from "../controllers/student.controller";
import { Router } from "express";
const studentRouter = Router();

studentRouter.get("/", StudentController.showListPage);
studentRouter.get("/create", StudentController.showCreatePage);
studentRouter.post("/create", StudentController.createStudent);
studentRouter.get("/detail/:id", StudentController.studentDetail);
studentRouter.get("/edit/:id", StudentController.showFormEdit);
studentRouter.post("/edit/:id", StudentController.updateStudent);
studentRouter.get("/delete/:id", StudentController.showFormDelete);
studentRouter.post("/delete/:id", StudentController.deleteStudent);
studentRouter.get("/class/:id", StudentController.classSelector);
studentRouter.get("/sort", StudentController.sortByGrade);

export default studentRouter;
