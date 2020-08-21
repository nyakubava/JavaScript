var entry;
var letterGrade;

//first use a do-while loop to get scores from user
do {
    entry = prompt("Enter number gradefrom 0 through 100\n" +
        "Or enter -1 to end entries", -1);
    if (isNaN(entry)) {
        alert("Entry must by a valid number from 0 through 100\n" +
            "Or enter -1 to end entries");
    } else {
        entry = parseInt(entry);
        if (entry >= 0 && entry <= 100) {
            if (entry < 59) {
                letterGrade = "F";
            } else
            if (entry >= 60 && entry <= 62) {
                letterGrade = "D-";
            } else
            if (entry >= 63 && entry <= 66) {
                letterGrade = "D";
            } else
            if (entry >= 67 && entry <= 69) {
                letterGrade = "D+";
            } else
            if (entry >= 70 && entry <= 76) {
                letterGrade = "C";
            } else
            if (entry >= 77 && entry <= 79) {
                letterGrade = "C+";
            } else
            if (entry >= 80 && entry <= 82) {
                letterGrade = "B-";
            } else
            if (entry >= 83 && entry <= 86) {
                letterGrade = "B";
            } else
            if (entry >= 87 && entry <= 89) {
                letterGrade = "B+";
            } else
            if (entry >= 90 && entry <= 92) {
                letterGrade = "A-";
            } else
            if (entry >= 93 && entry <= 100) {
                letterGrade = "A";
            }
            alert("\nNumber grade = " + entry + "\nLetter grade = " + letterGrade);
        } else

        if (entry != -1) {
            alert("Entry must by a valid number from 0 through 100\n" +
                "Or enter -1 to end entries");
        }



    }

}
while (entry != -1);