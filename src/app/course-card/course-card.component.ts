import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input({
    required: true,
  })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}
  ngOnInit(): void {}

  onCourseViewed(course: Course) {
    alert(course.description);
  }

  onClickCourse() {
    console.log("Card component clicked");
    this.courseSelected.emit(this.course);
  }
}
