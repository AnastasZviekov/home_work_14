// noinspection JSVoidFunctionReturnValueUsed

const gradation = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent"
};
let studentRating;
let adminRating;
let lectorRating;
let studentScore;
let listofCourse;
let subjectRating;
let scoreLector;

const users = [
    {
        name: "Jack Smith",
        age: 23,
        img: "JackSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 20
            },
            {
                "title": "Java Enterprise",
                "mark": 100
            }
        ]
    },
    {
        name: "Amal Smith",
        age: 20,
        img: "AmalSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 50
            }
        ]
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "NoahSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 50
            }
        ]
    },
    {
        name: "Charlie Smith",
        age: 18,
        img: "CharlieSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 75
            },
            {
                "title": "Java Enterprise",
                "mark": 23
            } ]
    },
    {
        name: "Emily Smith",
        age: 30,
        img: "EmilySmith",
        role: "admin",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 10,
                "lector": "Leo Smith"
            },
            {
                "title": "Java Enterprise",
                "score": 50,
                "lector": "David Smith"
            },
            {
                "title": "QA",
                "score": 75,
                "lector": "Emilie Smith"
            } ]
    },
    {
        name: "Leo Smith",
        age: 253,
        img: "LeoSmith",
        role: "lector",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 78,
                "studentsScore": 79
            },
            {
                "title": "Java Enterprise",
                "score": 85,
                "studentsScore": 85
            }
        ]
    }
];


class User {
    constructor (obj) {
        Object.assign( this, obj );
    }

    render () {
        return `<div class="role_render"><div><div class="image"><img class="avatar_image" src="images/users/${ this.img }.png" alt="image"></div>
 <div>Name: <strong>${ this.name }</strong></div>  <div>Age: <strong>${ this.age }</strong></div></div> <div> <span class="role">  <img class="role_image" src="images/roles/${this.role}.png">
  <span class="role_name">${ this.role[0].toUpperCase()+this.role.slice(1) }</span> <span/> </span></div></div>`
    }


    renderCourses () {
        if ( this.courses !== undefined ) {
            listofCourse = this.courses.map( (course) => {
                    if ( course.lector ) {
                        return `<span>Title: ${course.title} Lector:${course.lector}<br></span>`;
                    } else return `<span>Title: ${course.title}</span>`;
                }
            )
        }
        return `<div> ${listofCourse}</div>`
    }
}

class Student extends User {
    constructor (obj) {
        super ( obj );
    }

    getStudentLevel () {
        if ( this.courses !== undefined ) {
            subjectRating=this.courses.map ( course => {
                    if ( course.mark < 50 && course.mark >= 20 ) {
                        studentRating = `<span style="color: red">satisfactory</span>`
                    }
                    if ( course.mark > 50 && course.mark < 85 ) {
                        studentRating = `<span style="color: darkviolet">good</span>`
                    }
                    if ( course.mark > 85 && course.mark < 100 ) {
                        studentRating = `<span style="color: aquamarine">very-good</span>`
                    }
                    if ( course.mark === 100 ) {
                        studentRating = `<span style="color: forestgreen">excellent</span>`
                    }
return studentRating;
                }
            )
        }return subjectRating;
    }
}

class Admin extends User {
    constructor (obj) {
        super( obj );
    }

    renderCourses () {
        let superRender = super.renderCourses();
        return `${ superRender}`;

    }

    getAdminLevel () {
        if ( this.courses !== undefined ) {
           subjectRating= this.courses.map ( course => {
                    if ( course.score < 50 && course.score >= 10 ) {
                        adminRating = `<span style="color: red">Admins score :satisfactory</span>`
                    }
                    if ( course.score > 50 && course.score < 85 ) {
                        adminRating = `<span style="color: darkviolet">Admins score :good</span>`
                    }
                    if ( course.score > 85 && course.score < 100 ) {
                        adminRating =  `<span style="color: aquamarine">Admins score :very-good</span>`
                    }
                    if ( course.score === 100 ) {
                        adminRating = `<span style="color: forestgreen">Admins score :excellent</span>`
                    }
               return adminRating;

                }
            )
        } return subjectRating;
    }
}

class Lector extends User {
    constructor (obj) {
        super ( obj );
    }

    getLectorLevel () {
        if ( this.courses !== undefined ) {
            subjectRating=this.courses.map ( course => {
                    if ( course.score < 50 && course.score >= 20 ) {
                        lectorRating = `<span style="color: red">Lectors score:satisfactory</span>`
                    }
                    if ( course.score > 50 && course.score < 85 ) {
                        lectorRating = `<span style="color: darkviolet">Lectors score:good</span>`
                    }
                    if ( course.score > 85 && course.score < 100 ) {
                        lectorRating =  `<span style="color: aquamarine">Lectors score:very-good</span>`
                    }
                    if ( course.score === 100 ) {
                        lectorRating = `<span style="color: forestgreen">Lectors score:excellent</span>`
                    }
                return lectorRating
                }
            )
        } return subjectRating;
    }


    getStudentScore () {
        if ( this.courses !== undefined ) {
            scoreLector=this.courses.map ( course => {
                    if ( course.studentsScore < 50 && course.studentsScore >= 20 ) {
                        studentScore = `<span style="color: red">Average Students score:satisfactory</span>`
                    }
                    if ( course.studentsScore > 50 && course.studentsScore < 85 ) {
                        studentScore = `<span style="color: darkviolet">Average Students score:good</span>`
                    }
                    if ( course.studentsScore > 85 && course.studentsScore < 100 ) {
                        studentScore =  `<span style="color: aquamarine">Average Students score:very-good</span>`
                    }
                    if ( course.studentsScore === 100 ) {
                        studentScore = `<span style="color: forestgreen">Average Students score:excellent</span>`
                    }
                    return studentScore
                }
            )
        } console.log(scoreLector)
        return scoreLector;
    }

}
let user;
// noinspection JSVoidFunctionReturnValueUsed
let usersMap=users.map ( obj => {
        user = new User ( obj );
        if ( obj.role === "student" ) {
            user = new Student ( obj );
        }

        if ( obj.role === "lector" ) {
            user = new Lector ( obj );
        }
        if ( obj.role === "admin" ) {
            user = new Admin ( obj );
        }return user;
    }
)
    .map ( user => {
        console.log ( user )
        return user
    } )
    .forEach( user => {
        /*document.write( `${ user.render() }` );*/
        // noinspection JSUnresolvedReference
        if ( user.role === `lector` ) {
            document.write( `<div class="render_container">${ user.render() } <div class="lector_block"> ${ user.renderCourses() } ${ user.getLectorLevel()} <br>${user.getStudentScore()}</></div>`);
        }
        if ( user.role === `student` ) {
            document.write( `<div class="render_container"> ${ user.render() } ${ user.renderCourses() } ${ user.getStudentLevel()}</div>` );
        }
        if ( user.role === `admin` ) {
            document.write( `<div class="render_container"> ${ user.render() } <div class="admin_block">${ user.renderCourses() }${ user.getAdminLevel()}</div></div>` )
        }
    } )

console.log ( usersMap )







