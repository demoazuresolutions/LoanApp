import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicformComponent } from '../../dynamicform/dynamicform.component';


@Component({
  selector: 'app-gridlink',
  templateUrl: './gridlink.component.html',
  styleUrls: ['./gridlink.component.css']
})
export class GridlinkComponent implements OnInit {

  @Input() param: any;
  @Input() data: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.data);
  }

  openEntity() {
    const modalRef = this.modalService.open(DynamicformComponent, { backdrop: 'static' });
    modalRef.componentInstance.data = this.data;
    modalRef.componentInstance.action = 'Edit';
    modalRef.componentInstance.entity = 'payment';
    modalRef.result.then(
      (result) => {

      }, (reason) => {

      });
  }
  
}
