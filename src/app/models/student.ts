/* 
 * LMS WebApp with MEAN
 * Author: Muhammad Haris
 * Date: 03/2018
 * Version: 1.0.0
 */
export class Student {
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public password: string,
        public email: string,
        public address: string,
        public phone: string,
        public avatar: string,
    ){}
}

