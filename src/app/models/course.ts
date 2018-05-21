/* 
 * LMS WebApp with MEAN
 * Author: Muhammad Haris
 * Date: 03/2018
 * Version: 1.0.0
 */
export class Course {
    constructor(
        public teacher: string,
        public student: string,
        public name: string,
        public description: string,
        public type: string,
        public year: number 
    ){}
}

