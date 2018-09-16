import React from 'react';
import data from '../screens/data';

let text1 = data.lastConvo;
let text2 = data.twoHours;
let text3 = data.yesterday;

console.log("part1 text1", text1);
console.log("part1 text2", text2);
console.log("part1 text3", text3);

let Steps = {steppy: [
        {
          id: '0',
          message: 'Hi! Which conversation do you want to pull up?',
          trigger: 'start',
        },
        {
          id: 'start',
          options: [
            { value: 'lastConvo', label: 'Last Conversation', trigger: '1' },
            { value: 'twoHours', label: '2 hours ago', trigger: '2' },
            { value: 'yesterday', label: '24 hours ago', trigger: '3' },
          ],
        },
        {
          id: '1',
          message: text1,
          trigger: '4',
        },
        {
          id: '2',
          message: text2,
          trigger: '4',
        },
        {
          id: '3',
          message: text3,
          trigger: '4',
        },
        {
          id: '4',
          message: 'Is there any other conversation you\'d like to find out more about?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 'yes', label: 'Yes', trigger: 'start' },
            { value: 'no', label: 'No', trigger: 'end' }
          ],
        },
        {
          id: 'end',
          message: 'Thanks for taking the time to meet HelloLens',
          end: true
        }
    ]}

export default Steps;