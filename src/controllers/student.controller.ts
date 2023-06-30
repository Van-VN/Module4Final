import Student from "../schemas/student.schema";

class StudentController {
  static async studentDetail(req: any, res: any) {
    const student = await Student.findOne({ _id: req.params.id });
    res.render("detail", { data: student });
  }

  static showCreatePage(req: any, res: any) {
    res.render("create");
  }

  static async sortByGrade(req: any, res: any) {
    const students = await Student.find().sort({ practice: 1 });
    const studentsList = await Student.find();
    const classArray = [];
    studentsList.forEach((item) => {
      classArray.push(item.class);
    });
    const uniqueClass = [...new Set(classArray)];
    res.render("list", { data: students, className: uniqueClass });
  }

  static async classSelector(req: any, res: any) {
    const students = await Student.find({ class: req.params.id });
    const studentsList = await Student.find();
    const classArray = [];
    studentsList.forEach((item) => {
      classArray.push(item.class);
    });
    const uniqueClass = [...new Set(classArray)];
    res.render("list", { data: students, className: uniqueClass });
  }

  static async showListPage(req: any, res: any) {
    const students = await Student.find();
    const classArray = [];
    students.forEach((item) => {
      classArray.push(item.class);
    });
    const uniqueClass = [...new Set(classArray)];
    res.render("list", { data: students, className: uniqueClass });
  }

  static async createStudent(req: any, res: any) {
    try {
      const student = new Student({
        name: req.body.name,
        class: req.body.class,
        practice: req.body.practice,
        theory: req.body.theory,
        rate: req.body.rate,
        des: req.body.des,
      });
      await student.save();
      res.redirect("/");
    } catch (err) {
      console.log(err.message);
      res.end(404);
    }
  }

  static async showFormEdit(req: any, res: any) {
    const student = await Student.findOne({ _id: req.params.id });
    res.render("update", { data: student });
  }

  static async updateStudent(req: any, res: any) {
    try {
      const student = await Student.findOne({ _id: req.params.id });
      await student.updateOne({
        name: req.body.name,
        class: req.body.class,
        practice: req.body.practice,
        theory: req.body.theory,
        rate: req.body.rate,
        des: req.body.des,
      });
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.end(404);
    }
  }

  static showFormDelete(req: any, res: any) {
    const data = req.params.id;
    res.render("delete", { data: data });
  }

  static async deleteStudent(req: any, res: any) {
    try {
      const student = await Student.findByIdAndDelete({ _id: req.params.id });
      res.redirect("/");
    } catch (err) {
      console.log(err.message);
      res.end(404);
    }
  }
}

export default StudentController;
