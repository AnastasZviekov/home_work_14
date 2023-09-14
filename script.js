const gradation = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent"
};
let studentRating;
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
        role: "student"
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
            }]
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
            }]
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
    constructor(obj) {
        Object.assign ( this, obj );
    }

    render() {
        return document.write ( `<div class="image"><img src="images/users/${ this.img }.png"></div> <div>Name: ${ this.name }</div>  <div>Age: ${ this.age }</div> <div>${ this.role }</div> ` )
    }

    renderCourses() {
        if ( this.courses !== undefined ) {
            this.courses.map ( course => {
                console.log ( course );
                return course.title})
        }
    }
}

    class Student extends User {
    constructor(obj) {
        super ( obj );
    }
        getStudentLevel() {
            if ( this.courses !== undefined ) {
                this.courses.map ( course => {
                        if ( course.mark < 50 && course.mark >= 20 ) {
                            studentRating = `satisfied`
                        }
                        if ( course.mark > 50 && course.mark < 85 ) {
                            studentRating = `good`
                        }
                        if ( course.mark > 85 && course.mark < 100 ) {
                            studentRating = `very-good`
                        }
                        if ( course.mark === 100 ) {
                            studentRating = `excellent`
                        }
                        return studentRating;
                    }
                )
            }
          }
       }

class Admin extends User {
    constructor(obj) {
        super (obj);

    }

}

class Lector extends User {
    constructor(obj) {
        super (obj);
    }
}

let usersMap=users.map(obj=>{
let user= new User(obj);
    if (obj.role==="student") {
        user=new Student(obj);
}

if (obj.role==="lector") {
    user=new Lector(obj)
}
    if (obj.role==="admin") {
        user=new Admin(obj)
    }
    return user;
}
)
    .map(user=>{
        console.log(user)
        return user
    })

    .forEach(user=> {
       console.log(user.render());
       console.log(user.renderCourses())
        if(user.role===`student`) { console.log(user.getStudentLevel)
            document.write(`${user.getStudentLevel()}`);
        }
    })


console.log(usersMap)




