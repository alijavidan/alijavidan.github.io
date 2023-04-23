import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Ali Javidan";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name:"keywords", content:"Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Ali Javidan Live Resume, Ali Javidan Resume, Ali Javidan CV, Curriculum Ali Javidan, ajavidan live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Ali Javidan" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2023-04-22", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Full-stack Web Developer. Find out more in my live-resume!" }
    );
  }
}
