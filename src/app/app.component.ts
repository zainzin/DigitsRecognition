import {Component, OnInit, ViewChild} from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {DrawableDirective} from './drawable.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(DrawableDirective) canvas;
  model: tf.Model;
  predictions: any;

  ngOnInit(): void {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadModel('/assets/mnist_model_js/model.json');
  }

  async predict(imageData: ImageData) {
    const prediction = await tf.tidy(() => {
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, 'float32');
      const output = this.model.predict(img) as any;

      this.predictions = Array.from(output.dataSync());
    });
  }
}
