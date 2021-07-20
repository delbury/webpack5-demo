import _ from 'lodash';
import './style.css';
import Icon from './favicon.png';
import json from './json.json';
import csv from './csv.csv';
import xml from './xml.xml';
import toml from './toml.toml';
import yaml from './yaml.yaml';
import json5 from './json5.json5';


function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const image = new Image();
  image.src = Icon;
  element.append(image);

  console.log(json);
  console.log(csv);
  console.log(xml);
  console.log(toml);
  console.log(yaml);
  console.log(json5);

  return element;
}

document.body.prepend(component());