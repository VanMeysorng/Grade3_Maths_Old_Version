// topics.js - Grade 3 Math Practice (Complete Curriculum)

// Helper function to shuffle options for multiple choice
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function randomizeQuestion(question) {
    if (question.type === 'mc') {
        const originalCorrect = question.correct;
        const options = [...question.options];
        const shuffled = shuffleArray([...options]);
        return {
            ...question,
            options: shuffled,
            correct: originalCorrect
        };
    }
    return question;
}

// ==================== TOPIC 1: Numbers to 1000 ====================
const NUMBERS_TO_1000_QUESTIONS = [
    {
        type: "mc",
        text: "Which number is the word form of 'five hundred thirty-seven'?",
        options: ["507", "530", "573", "537"],
        correct: "537",
        hint: "Five hundred = 500, thirty = 30, seven = 7. Add them together.",
        unit: "Numbers to 1000: Reading & Writing Numbers"
    },
    {
        type: "sa",
        text: "Write the number 426 in expanded form.",
        correctAnswer: "400 + 20 + 6",
        hint: "Break it down by hundreds, tens, and ones.",
        unit: "Numbers to 1000: Expanded Form",
        disclaimer: "Write the number as a sum of its place values."
    },
    {
        type: "mc",
        text: "Which number comes just after 899?",
        options: ["890", "900", "1000", "901"],
        correct: "900",
        hint: "Counting on from 899: 899, 900.",
        unit: "Numbers to 1000: Counting"
    },
    {
        type: "sa",
        text: "Order these numbers from least to greatest: 673, 637, 736, 763.",
        correctAnswer: "637, 673, 736, 763",
        hint: "Compare the hundreds place first. If they're the same, look at the tens.",
        unit: "Numbers to 1000: Comparing & Ordering",
        disclaimer: "List them in order, separated by commas."
    },
    {
        type: "fr",
        text: "Create a number that is between 450 and 500. Explain why it is between these two numbers using place value.",
        correctAnswer: "Example: 475 is between 450 and 500 because it has 4 hundreds (400) and 75, which is more than 50 but less than 100.",
        hint: "Think about the hundreds and tens place.",
        unit: "Numbers to 1000: Number Lines",
        disclaimer: "Choose a number and write a short paragraph explaining your reasoning."
    },
    {
        type: "mc",
        text: "What is the value of the digit '8' in the number 782?",
        options: ["8", "80", "800", "8 tens"],
        correct: "80",
        hint: "In 782, the 8 is in the tens place.",
        unit: "Numbers to 1000: Place Value"
    },
    {
        type: "sa",
        text: "Complete the pattern: 325, 330, 335, ____, 345, 350.",
        correctAnswer: "340",
        hint: "What number are you adding each time?",
        unit: "Numbers to 1000: Number Patterns"
    },
    {
        type: "mc",
        text: "Which number has a 3 in the hundreds place?",
        options: ["435", "345", "534", "453"],
        correct: "345",
        hint: "The hundreds place is the third digit from the right.",
        unit: "Numbers to 1000: Place Value"
    }
];

// ==================== TOPIC 2: Place Value ====================
const PLACE_VALUE_QUESTIONS = [
    {
        type: "mc",
        text: "What is the place value of the digit 5 in the number 6,251?",
        options: ["Ones", "Tens", "Hundreds", "Thousands"],
        correct: "Tens",
        hint: "From the right: ones, tens, hundreds, thousands.",
        unit: "Place Value: Identifying Place Value"
    },
    {
        type: "sa",
        text: "What number is made of 3 hundreds, 8 tens, and 2 ones?",
        correctAnswer: "382",
        hint: "3 hundreds = 300, 8 tens = 80, 2 ones = 2.",
        unit: "Place Value: Building Numbers"
    },
    {
        type: "mc",
        text: "Which number is equal to 500 + 70 + 4?",
        options: ["574", "547", "5074", "5704"],
        correct: "574",
        hint: "500 + 70 = 570, then + 4 = 574.",
        unit: "Place Value: Expanded Form to Standard Form"
    },
    {
        type: "sa",
        text: "Write the number 903 in expanded form.",
        correctAnswer: "900 + 3",
        hint: "There are 0 tens.",
        unit: "Place Value: Expanded Form"
    },
    {
        type: "mc",
        text: "Which number has a 6 in the hundreds place AND a 4 in the tens place?",
        options: ["640", "604", "460", "406"],
        correct: "640",
        hint: "Hundreds place is first digit, tens place is second digit.",
        unit: "Place Value: Identifying Digits"
    },
    {
        type: "sa",
        text: "What is the value of the digit 0 in the number 207?",
        correctAnswer: "0",
        hint: "The 0 is in the tens place.",
        unit: "Place Value: Value of Zero"
    },
    {
        type: "mc",
        text: "Which number is the same as 4 hundreds, 15 tens, and 3 ones?",
        options: ["4153", "553", "463", "415"],
        correct: "553",
        hint: "15 tens = 1 hundred and 5 tens.",
        unit: "Place Value: Regrouping"
    }
];

// ==================== TOPIC 3: Rounding ====================
const ROUNDING_QUESTIONS = [
    {
        type: "mc",
        text: "Round 78 to the nearest ten.",
        options: ["70", "80", "75", "100"],
        correct: "80",
        hint: "Look at the ones digit. 8 ≥ 5, so round up.",
        unit: "Rounding: Nearest Ten"
    },
    {
        type: "sa",
        text: "Round 523 to the nearest hundred.",
        correctAnswer: "500",
        hint: "Look at the tens digit. 2 < 5, so round down.",
        unit: "Rounding: Nearest Hundred"
    },
    {
        type: "mc",
        text: "A farmer has 247 apples. About how many apples, rounded to the nearest ten?",
        options: ["200", "250", "240", "300"],
        correct: "250",
        hint: "Look at the ones digit (7). 7 ≥ 5, so round up.",
        unit: "Rounding: Real-World Estimation"
    },
    {
        type: "sa",
        text: "Round 1,012 to the nearest hundred.",
        correctAnswer: "1,000",
        hint: "Look at the tens digit. 1 < 5, so round down.",
        unit: "Rounding: Nearest Hundred"
    },
    {
        type: "mc",
        text: "Which number rounds to 600 when rounded to the nearest hundred?",
        options: ["549", "551", "649", "650"],
        correct: "649",
        hint: "Tens digit less than 5 rounds down.",
        unit: "Rounding: Rounding to Nearest Hundred"
    },
    {
        type: "sa",
        text: "List all numbers that round to 40 when rounded to the nearest ten.",
        correctAnswer: "35, 36, 37, 38, 39, 40, 41, 42, 43, 44",
        hint: "Numbers ending in 0-4 round down, 5-9 round up.",
        unit: "Rounding: Rounding Rule"
    },
    {
        type: "mc",
        text: "What is 357 rounded to the nearest ten?",
        options: ["350", "360", "400", "357"],
        correct: "360",
        hint: "Ones digit is 7 ≥ 5, so round up.",
        unit: "Rounding: Nearest Ten"
    }
];

// ==================== TOPIC 4: Addition ====================
const ADDITION_QUESTIONS = [
    {
        type: "sa",
        text: "Add 345 + 278.",
        correctAnswer: "623",
        hint: "Add ones first, then tens, then hundreds. Regroup if needed.",
        unit: "Addition: 3-Digit Addition with Regrouping"
    },
    {
        type: "mc",
        text: "What is the sum of 468 and 129?",
        options: ["587", "597", "587", "497"],
        correct: "597",
        hint: "468 + 100 = 568, + 29 = 597.",
        unit: "Addition: Adding 3-Digit Numbers"
    },
    {
        type: "sa",
        text: "Add: 502 + 299.",
        correctAnswer: "801",
        hint: "502 + 300 = 802, then subtract 1 = 801.",
        unit: "Addition: Mental Math Strategies"
    },
    {
        type: "mc",
        text: "Which expression has the greatest sum?",
        options: ["234 + 159", "289 + 103", "312 + 78", "401 + 12"],
        correct: "289 + 103",
        hint: "Estimate each sum.",
        unit: "Addition: Comparing Sums"
    },
    {
        type: "sa",
        text: "Find the missing number: 475 + ____ = 823.",
        correctAnswer: "348",
        hint: "Subtract 475 from 823.",
        unit: "Addition: Missing Addend"
    },
    {
        type: "mc",
        text: "What is the sum of 90 + 80 + 70?",
        options: ["240", "210", "230", "250"],
        correct: "240",
        hint: "90 + 80 = 170, then + 70 = 240.",
        unit: "Addition: Adding Multiples of Ten"
    },
    {
        type: "sa",
        text: "Add 1,234 + 567.",
        correctAnswer: "1,801",
        hint: "1,200 + 500 = 1,700, 34 + 67 = 101, total 1,801.",
        unit: "Addition: Adding 4-Digit Numbers"
    }
];

// ==================== TOPIC 5: Subtraction ====================
const SUBTRACTION_QUESTIONS = [
    {
        type: "sa",
        text: "Subtract 356 from 521.",
        correctAnswer: "165",
        hint: "Start with ones place. Regroup if needed.",
        unit: "Subtraction: 3-Digit Subtraction with Regrouping"
    },
    {
        type: "mc",
        text: "What is the difference between 700 and 347?",
        options: ["363", "453", "353", "463"],
        correct: "353",
        hint: "700 - 300 = 400, 400 - 47 = 353.",
        unit: "Subtraction: Mental Math"
    },
    {
        type: "sa",
        text: "Calculate: 812 - 489.",
        correctAnswer: "323",
        hint: "812 - 400 = 412, 412 - 80 = 332, 332 - 9 = 323.",
        unit: "Subtraction: Subtracting with Regrouping"
    },
    {
        type: "mc",
        text: "Which number sentence is correct?",
        options: ["521 - 217 = 314", "521 - 217 = 304", "521 - 217 = 324", "521 - 217 = 294"],
        correct: "521 - 217 = 304",
        hint: "521 - 200 = 321, 321 - 17 = 304.",
        unit: "Subtraction: Checking for Accuracy"
    },
    {
        type: "sa",
        text: "Find the missing number: 800 - ____ = 453.",
        correctAnswer: "347",
        hint: "800 - 453 = 347.",
        unit: "Subtraction: Missing Number"
    },
    {
        type: "mc",
        text: "What is 3,000 - 1,250?",
        options: ["1,850", "1,750", "2,750", "1,950"],
        correct: "1,750",
        hint: "3,000 - 1,000 = 2,000, then - 250 = 1,750.",
        unit: "Subtraction: Subtracting Thousands"
    },
    {
        type: "sa",
        text: "A toy store had 422 teddy bears. They sold 185. How many are left?",
        correctAnswer: "237",
        hint: "Subtract 185 from 422. Regroup if needed.",
        unit: "Subtraction: Real-World Problem"
    }
];

// ==================== TOPIC 6: Time ====================
const TIME_QUESTIONS = [
    {
        type: "mc",
        text: "How many minutes are in one hour?",
        options: ["30", "60", "100", "24"],
        correct: "60",
        hint: "Think about how long an hour is.",
        unit: "Time: Units of Time"
    },
    {
        type: "sa",
        text: "If it is 2:15 PM now, what time will it be in 30 minutes?",
        correctAnswer: "2:45 PM",
        hint: "Add 30 minutes.",
        unit: "Time: Elapsed Time"
    },
    {
        type: "mc",
        text: "Which shows a quarter past 3?",
        options: ["3:00", "3:15", "3:30", "3:45"],
        correct: "3:15",
        hint: "Quarter past = 15 minutes after.",
        unit: "Time: Reading Time"
    },
    {
        type: "sa",
        text: "How many hours from 8:00 AM to 2:00 PM?",
        correctAnswer: "6 hours",
        hint: "Count the hours.",
        unit: "Time: Elapsed Time"
    },
    {
        type: "mc",
        text: "Which is another way to write 12:45?",
        options: ["Quarter to 12", "Quarter past 12", "Quarter to 1", "Half past 12"],
        correct: "Quarter to 1",
        hint: "45 min after 12 is 15 min before 1.",
        unit: "Time: Time Language"
    },
    {
        type: "sa",
        text: "How many days are in a leap year?",
        correctAnswer: "366",
        hint: "February has 29 days in a leap year.",
        unit: "Time: Calendar"
    }
];

// ==================== TOPIC 7: 2D and 3D Shapes ====================
const SHAPES_QUESTIONS = [
    {
        type: "mc",
        text: "How many sides does a hexagon have?",
        options: ["4", "5", "6", "8"],
        correct: "6",
        hint: "Hexa means six.",
        unit: "2D Shapes: Polygons"
    },
    {
        type: "sa",
        text: "Name a shape that has 3 sides and 3 vertices.",
        correctAnswer: "Triangle",
        hint: "Three straight sides.",
        unit: "2D Shapes: Triangles"
    },
    {
        type: "mc",
        text: "Which 3D shape has 6 square faces?",
        options: ["Sphere", "Cylinder", "Cube", "Cone"],
        correct: "Cube",
        hint: "All faces are squares.",
        unit: "3D Shapes: Cubes"
    },
    {
        type: "sa",
        text: "How many vertices does a rectangular prism have?",
        correctAnswer: "8",
        hint: "Count the corners on a box.",
        unit: "3D Shapes: Vertices"
    },
    {
        type: "mc",
        text: "What shape has 8 sides?",
        options: ["Octagon", "Hexagon", "Pentagon", "Heptagon"],
        correct: "Octagon",
        hint: "Octo means eight.",
        unit: "2D Shapes: Polygon Names"
    },
    {
        type: "sa",
        text: "How many edges does a cylinder have?",
        correctAnswer: "2",
        hint: "Where two faces meet.",
        unit: "3D Shapes: Edges"
    },
    {
        type: "mc",
        text: "Which shape has no vertices?",
        options: ["Cube", "Sphere", "Pyramid", "Rectangular prism"],
        correct: "Sphere",
        hint: "Perfectly round with no corners.",
        unit: "3D Shapes: Spheres"
    }
];

// ==================== TOPIC 8: Angles ====================
const ANGLES_QUESTIONS = [
    {
        type: "mc",
        text: "What type of angle is less than 90 degrees?",
        options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"],
        correct: "Acute angle",
        hint: "'Acute' means small and sharp.",
        unit: "Angles: Types of Angles"
    },
    {
        type: "sa",
        text: "How many degrees is a right angle?",
        correctAnswer: "90",
        hint: "A square corner.",
        unit: "Angles: Right Angles"
    },
    {
        type: "mc",
        text: "Which angle is greater than 90° but less than 180°?",
        options: ["Acute", "Right", "Obtuse", "Reflex"],
        correct: "Obtuse",
        hint: "Obtuse angles are wide.",
        unit: "Angles: Obtuse Angles"
    },
    {
        type: "sa",
        text: "What type of angle is formed by clock hands at 3:00?",
        correctAnswer: "Right angle",
        hint: "Hands point to 12 and 3.",
        unit: "Angles: Real-World Angles"
    },
    {
        type: "mc",
        text: "How many right angles are in a square?",
        options: ["2", "3", "4", "0"],
        correct: "4",
        hint: "Count the corners.",
        unit: "Angles: Right Angles in Shapes"
    },
    {
        type: "sa",
        text: "What is the measure of a straight angle?",
        correctAnswer: "180 degrees",
        hint: "Looks like a straight line.",
        unit: "Angles: Straight Angles"
    }
];

// ==================== TOPIC 9: Direction and Position ====================
const DIRECTION_QUESTIONS = [
    {
        type: "mc",
        text: "If facing north, what direction is behind you?",
        options: ["East", "West", "South", "North"],
        correct: "South",
        hint: "Opposite of north.",
        unit: "Direction: Cardinal Directions"
    },
    {
        type: "sa",
        text: "Halfway between north and east is called?",
        correctAnswer: "Northeast",
        hint: "Combine the names.",
        unit: "Direction: Intercardinal Directions"
    },
    {
        type: "mc",
        text: "Turn right from facing east. Which direction?",
        options: ["North", "South", "West", "East"],
        correct: "South",
        hint: "Clockwise: East → South.",
        unit: "Direction: Turns"
    },
    {
        type: "sa",
        text: "Point at (3, 5). What is the horizontal coordinate?",
        correctAnswer: "3",
        hint: "Coordinates are (x, y).",
        unit: "Position: Grid Coordinates"
    },
    {
        type: "mc",
        text: "Which direction is opposite of southwest?",
        options: ["Northwest", "Northeast", "Southeast", "West"],
        correct: "Northeast",
        hint: "Opposite of south is north, opposite of west is east.",
        unit: "Direction: Opposite Directions"
    },
    {
        type: "sa",
        text: "Quarter turn clockwise from north faces?",
        correctAnswer: "East",
        hint: "90° clockwise.",
        unit: "Direction: Quarter Turns"
    }
];

// ==================== TOPIC 10: Patterns ====================
const PATTERNS_QUESTIONS = [
    {
        type: "mc",
        text: "What comes next? 2, 4, 6, 8, __",
        options: ["9", "10", "12", "14"],
        correct: "10",
        hint: "Add 2 each time.",
        unit: "Number Patterns: Increasing"
    },
    {
        type: "sa",
        text: "Next shape? ▲, ■, ▲, ■, __",
        correctAnswer: "▲",
        hint: "Alternates between triangle and square.",
        unit: "Shape Patterns: Alternating"
    },
    {
        type: "mc",
        text: "Complete: 50, 45, 40, 35, __",
        options: ["30", "25", "40", "45"],
        correct: "30",
        hint: "Subtract 5 each time.",
        unit: "Number Patterns: Decreasing"
    },
    {
        type: "sa",
        text: "Rule for: 3, 6, 12, 24, 48?",
        correctAnswer: "Multiply by 2",
        hint: "What operation gets you to the next number?",
        unit: "Number Patterns: Multiplication"
    },
    {
        type: "mc",
        text: "Next shape? ○, □, ○, □, ○, __",
        options: ["○", "□", "△", "☆"],
        correct: "□",
        hint: "Alternates.",
        unit: "Shape Patterns: Alternating"
    }
];

// ==================== TOPIC 11: Measurement ====================
const MEASUREMENT_QUESTIONS = [
    {
        type: "mc",
        text: "Best unit to measure a pencil?",
        options: ["Kilometers", "Meters", "Centimeters", "Millimeters"],
        correct: "Centimeters",
        hint: "Think about pencil length.",
        unit: "Length: Choosing Units"
    },
    {
        type: "sa",
        text: "How many centimeters in 1 meter?",
        correctAnswer: "100",
        hint: "Centi = hundredth.",
        unit: "Length: Metric Conversion"
    },
    {
        type: "mc",
        text: "Which is heavier: 1 kg feathers or 1 kg rocks?",
        options: ["Feathers", "Rocks", "Same", "Depends"],
        correct: "Same",
        hint: "Both are 1 kilogram!",
        unit: "Mass: Understanding Weight"
    },
    {
        type: "sa",
        text: "How many milliliters in a liter?",
        correctAnswer: "1000",
        hint: "Milli = thousandth.",
        unit: "Capacity: Metric Conversion"
    },
    {
        type: "mc",
        text: "Best estimate for mass of a watermelon?",
        options: ["5 grams", "5 kilograms", "50 grams", "500 kilograms"],
        correct: "5 kilograms",
        hint: "How heavy does a watermelon feel?",
        unit: "Mass: Estimating Mass"
    },
    {
        type: "sa",
        text: "How many mm in 3 cm?",
        correctAnswer: "30",
        hint: "1 cm = 10 mm",
        unit: "Length: Converting Units"
    }
];

// ==================== TOPIC 12: Perimeter and Area ====================
const PERIMETER_AREA_QUESTIONS = [
    {
        type: "mc",
        text: "Perimeter of square with side 5 cm?",
        options: ["10 cm", "20 cm", "25 cm", "15 cm"],
        correct: "20 cm",
        hint: "Perimeter = side × 4",
        unit: "Perimeter: Squares"
    },
    {
        type: "sa",
        text: "Rectangle: length 8 m, width 3 m. Perimeter?",
        correctAnswer: "22 m",
        hint: "Perimeter = 2 × (length + width)",
        unit: "Perimeter: Rectangles"
    },
    {
        type: "mc",
        text: "Area of rectangle 4 cm by 6 cm?",
        options: ["20 cm²", "24 cm²", "10 cm²", "24 cm"],
        correct: "24 cm²",
        hint: "Area = length × width",
        unit: "Area: Rectangles"
    },
    {
        type: "sa",
        text: "Square area 36 m². Side length?",
        correctAnswer: "6 m",
        hint: "What number × itself = 36?",
        unit: "Area: Squares"
    },
    {
        type: "mc",
        text: "Perimeter of rectangle 10 m by 5 m?",
        options: ["15 m", "30 m", "50 m", "20 m"],
        correct: "30 m",
        hint: "2 × (10 + 5) = 30",
        unit: "Perimeter: Rectangles"
    }
];

// ==================== TOPIC 13: Multiplication Properties and Facts ====================
const MULTIPLICATION_QUESTIONS = [
    {
        type: "mc",
        text: "What is 7 × 8?",
        options: ["48", "56", "64", "42"],
        correct: "56",
        hint: "Think of 7 groups of 8.",
        unit: "Multiplication: Basic Facts"
    },
    {
        type: "sa",
        text: "What is the product of 9 and 6?",
        correctAnswer: "54",
        hint: "9 × 6 = 54",
        unit: "Multiplication: Basic Facts"
    },
    {
        type: "mc",
        text: "Which shows the commutative property?",
        options: ["5 × 3 = 3 × 5", "5 × 3 = 5 + 5 + 5", "5 × 1 = 5", "5 × 0 = 0"],
        correct: "5 × 3 = 3 × 5",
        hint: "Order doesn't matter in multiplication.",
        unit: "Multiplication: Commutative Property"
    },
    {
        type: "sa",
        text: "What multiplication fact does 4 + 4 + 4 + 4 represent?",
        correctAnswer: "4 × 4 = 16",
        hint: "Count how many groups of 4.",
        unit: "Multiplication: Repeated Addition"
    },
    {
        type: "mc",
        text: "What is 0 × 99?",
        options: ["0", "99", "1", "990"],
        correct: "0",
        hint: "Zero times any number is zero.",
        unit: "Multiplication: Zero Property"
    },
    {
        type: "sa",
        text: "What is 1 × 345?",
        correctAnswer: "345",
        hint: "One times any number is the number itself.",
        unit: "Multiplication: Identity Property"
    }
];

// ==================== TOPIC 14: Multiplication and Division ====================
const MULT_DIV_QUESTIONS = [
    {
        type: "mc",
        text: "What is 36 ÷ 6?",
        options: ["4", "5", "6", "7"],
        correct: "6",
        hint: "How many groups of 6 in 36?",
        unit: "Division: Basic Facts"
    },
    {
        type: "sa",
        text: "What is 42 ÷ 7?",
        correctAnswer: "6",
        hint: "7 × 6 = 42",
        unit: "Division: Basic Facts"
    },
    {
        type: "mc",
        text: "If 8 × 5 = 40, then 40 ÷ 5 = ?",
        options: ["5", "6", "7", "8"],
        correct: "8",
        hint: "Multiplication and division are opposites.",
        unit: "Division: Inverse Operations"
    },
    {
        type: "sa",
        text: "Share 24 cookies equally among 4 friends. How many each?",
        correctAnswer: "6",
        hint: "24 ÷ 4 = 6",
        unit: "Division: Real-World Problems"
    },
    {
        type: "mc",
        text: "What is 54 ÷ 9?",
        options: ["5", "6", "7", "8"],
        correct: "6",
        hint: "9 × 6 = 54",
        unit: "Division: Basic Facts"
    }
];

// ==================== TOPIC 15: Fractions ====================
const FRACTIONS_QUESTIONS = [
    {
        type: "mc",
        text: "What fraction of the circle is shaded? (Half shaded)",
        options: ["1/4", "1/2", "3/4", "1/3"],
        correct: "1/2",
        hint: "Half means 1 out of 2 equal parts.",
        unit: "Fractions: Basic Concepts"
    },
    {
        type: "sa",
        text: "What fraction is equivalent to 2/4?",
        correctAnswer: "1/2",
        hint: "Simplify by dividing numerator and denominator by 2.",
        unit: "Fractions: Equivalent Fractions"
    },
    {
        type: "mc",
        text: "Which is larger: 1/3 or 1/4?",
        options: ["1/3", "1/4", "Equal", "Cannot tell"],
        correct: "1/3",
        hint: "With same numerator, smaller denominator = larger fraction.",
        unit: "Fractions: Comparing Fractions"
    },
    {
        type: "sa",
        text: "How many quarters make a whole?",
        correctAnswer: "4",
        hint: "Quarter = 1/4, so 4 × 1/4 = 1.",
        unit: "Fractions: Unit Fractions"
    },
    {
        type: "mc",
        text: "What is 3/4 of 12?",
        options: ["3", "4", "8", "9"],
        correct: "9",
        hint: "First find 1/4 of 12 = 3, then multiply by 3.",
        unit: "Fractions: Finding a Fraction of a Number"
    }
];

// ==================== TOPIC 16: Calculating with Fractions ====================
const FRACTION_CALC_QUESTIONS = [
    {
        type: "mc",
        text: "What is 1/4 + 1/4?",
        options: ["1/8", "1/2", "2/4", "Both B and C"],
        correct: "Both B and C",
        hint: "Add numerators: 1+1=2, so 2/4 = 1/2",
        unit: "Fraction Operations: Addition"
    },
    {
        type: "sa",
        text: "What is 3/5 - 1/5?",
        correctAnswer: "2/5",
        hint: "Subtract numerators: 3-1=2, denominator stays 5.",
        unit: "Fraction Operations: Subtraction"
    },
    {
        type: "mc",
        text: "What is 1/2 + 1/4?",
        options: ["2/6", "3/4", "2/4", "1/3"],
        correct: "3/4",
        hint: "Convert 1/2 to 2/4, then add: 2/4 + 1/4 = 3/4",
        unit: "Fraction Operations: Unlike Denominators"
    },
    {
        type: "sa",
        text: "What is 2/3 - 1/6?",
        correctAnswer: "1/2",
        hint: "Convert 2/3 to 4/6, then 4/6 - 1/6 = 3/6 = 1/2",
        unit: "Fraction Operations: Subtraction"
    }
];

// ==================== TOPIC 17: Data Handling ====================
const DATA_QUESTIONS = [
    {
        type: "mc",
        text: "Which graph uses bars to show data?",
        options: ["Pie chart", "Bar graph", "Line plot", "Pictograph"],
        correct: "Bar graph",
        hint: "Bars represent amounts.",
        unit: "Data: Types of Graphs"
    },
    {
        type: "sa",
        text: "What is the range of these numbers: 5, 8, 12, 15, 20?",
        correctAnswer: "15",
        hint: "Range = largest - smallest = 20 - 5 = 15",
        unit: "Data: Range"
    },
    {
        type: "mc",
        text: "What is the mode of: 3, 5, 3, 7, 3, 9?",
        options: ["3", "5", "7", "9"],
        correct: "3",
        hint: "Mode = most frequent number.",
        unit: "Data: Mode"
    },
    {
        type: "sa",
        text: "What is the median of: 4, 7, 2, 9, 5?",
        correctAnswer: "5",
        hint: "Order numbers: 2,4,5,7,9. Middle number is 5.",
        unit: "Data: Median"
    },
    {
        type: "mc",
        text: "A pictograph uses symbols. If one symbol = 5 students, how many for 25 students?",
        options: ["3", "4", "5", "6"],
        correct: "5",
        hint: "25 ÷ 5 = 5 symbols",
        unit: "Data: Pictographs"
    }
];

// ==================== Group All Topics ====================
const TOPICS = {
    numbersTo1000: {
        name: "Numbers to 1000",
        icon: "fas fa-calculator",
        order: 1,
        questions: NUMBERS_TO_1000_QUESTIONS.map(q => randomizeQuestion(q))
    },
    placeValue: {
        name: "Place Value",
        icon: "fas fa-chart-simple",
        order: 2,
        questions: PLACE_VALUE_QUESTIONS.map(q => randomizeQuestion(q))
    },
    rounding: {
        name: "Rounding",
        icon: "fas fa-arrow-right-arrow-left",
        order: 3,
        questions: ROUNDING_QUESTIONS.map(q => randomizeQuestion(q))
    },
    addition: {
        name: "Addition",
        icon: "fas fa-plus",
        order: 4,
        questions: ADDITION_QUESTIONS.map(q => randomizeQuestion(q))
    },
    subtraction: {
        name: "Subtraction",
        icon: "fas fa-minus",
        order: 5,
        questions: SUBTRACTION_QUESTIONS.map(q => randomizeQuestion(q))
    },
    time: {
        name: "Time",
        icon: "fas fa-clock",
        order: 6,
        questions: TIME_QUESTIONS.map(q => randomizeQuestion(q))
    },
    shapes: {
        name: "2D & 3D Shapes",
        icon: "fas fa-cube",
        order: 7,
        questions: SHAPES_QUESTIONS.map(q => randomizeQuestion(q))
    },
    angles: {
        name: "Angles",
        icon: "fas fa-draw-polygon",
        order: 8,
        questions: ANGLES_QUESTIONS.map(q => randomizeQuestion(q))
    },
    direction: {
        name: "Direction & Position",
        icon: "fas fa-compass",
        order: 9,
        questions: DIRECTION_QUESTIONS.map(q => randomizeQuestion(q))
    },
    patterns: {
        name: "Patterns",
        icon: "fas fa-chart-line",
        order: 10,
        questions: PATTERNS_QUESTIONS.map(q => randomizeQuestion(q))
    },
    measurement: {
        name: "Length, Mass & Capacity",
        icon: "fas fa-ruler",
        order: 11,
        questions: MEASUREMENT_QUESTIONS.map(q => randomizeQuestion(q))
    },
    perimeterArea: {
        name: "Perimeter & Area",
        icon: "fas fa-border-all",
        order: 12,
        questions: PERIMETER_AREA_QUESTIONS.map(q => randomizeQuestion(q))
    },
    multiplication: {
        name: "Multiplication Properties & Facts",
        icon: "fas fa-times",
        order: 13,
        questions: MULTIPLICATION_QUESTIONS.map(q => randomizeQuestion(q))
    },
    multiplicationDivision: {
        name: "Multiplication & Division",
        icon: "fas fa-divide",
        order: 14,
        questions: MULT_DIV_QUESTIONS.map(q => randomizeQuestion(q))
    },
    fractions: {
        name: "Fractions",
        icon: "fas fa-chart-pie",
        order: 15,
        questions: FRACTIONS_QUESTIONS.map(q => randomizeQuestion(q))
    },
    fractionCalc: {
        name: "Calculating with Fractions",
        icon: "fas fa-plus-circle",
        order: 16,
        questions: FRACTION_CALC_QUESTIONS.map(q => randomizeQuestion(q))
    },
    data: {
        name: "Data Handling",
        icon: "fas fa-chart-bar",
        order: 17,
        questions: DATA_QUESTIONS.map(q => randomizeQuestion(q))
    }
};

const TOPIC_ORDER = [
    'numbersTo1000', 'placeValue', 'rounding', 'addition', 'subtraction',
    'time', 'shapes', 'angles', 'direction', 'patterns', 'measurement',
    'perimeterArea', 'multiplication', 'multiplicationDivision', 'fractions',
    'fractionCalc', 'data'
];

// Randomize all questions when loaded
function randomizeAllQuestions() {
    for (let topic in TOPICS) {
        TOPICS[topic].questions = TOPICS[topic].questions.map(q => randomizeQuestion(q));
    }
}

// Auto-randomize when this file loads
randomizeAllQuestions();