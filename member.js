function skillsMember() {
    var member = {
        name: "Raj",
        age: 25,
        location: "Bangalore",
        skills: ["JavaScript", "React", "NodeJS", "Angular"],
        getSkills: function() {
            return this.skills;
        }
    }
    return member;
}