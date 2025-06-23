// src/notes/cpp.jsx
const cppNotes = {
    id: "cpp",
    title: "C++",
    icon: "📘",
     topics: [
    {
      title: "Introduction to C++",
      content: "C++ is a powerful, high-performance programming language developed by Bjarne Stroustrup as an extension to the C language. It supports both procedural and object-oriented programming paradigms, making it versatile for system programming, game development, embedded systems, and more. A basic C++ program requires the `<iostream>` header for input/output.",
      code: `// To compile and run this:
// 1. Save as e.g., main.cpp
// 2. Compile: g++ main.cpp -o main
// 3. Run: ./main

#include <iostream> // Required for cout and endl

int main() { // Main function, entry point of the program
    std::cout << "Hello, C++!" << std::endl; // Print "Hello, C++!" to console
    return 0; // Indicate successful execution
}`
    },
    {
      title: "OOP in C++ (Object-Oriented Programming)",
      content: "C++ fully supports OOP principles: Encapsulation (bundling data and methods that operate on the data), Inheritance (a class deriving properties from another), Polymorphism (one interface, multiple forms), and Abstraction (hiding complex implementation details). The example below demonstrates a simple class with inheritance.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream> // For cout
using namespace std; // For brevity in examples

class Animal { // Base class
public:
    // Member function
    void speak() {
        cout << "Animal makes a sound." << endl;
    }
};

class Dog : public Animal { // Derived class inheriting from Animal
public:
    // Overriding the speak method
    void speak() {
        cout << "Dog barks." << endl;
    }
};

/*
int main() {
    Dog myDog;
    myDog.speak(); // Calls Dog's speak method
    return 0;
}
*/`
    },
    {
      title: "STL (Standard Template Library)",
      content: "The STL is a set of C++ template classes that provide generic algorithms and data structures. Key components include Containers (vectors, lists, maps), Algorithms (sort, search), and Iterators (to traverse containers). The example uses `std::vector` and `std::sort`.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream>
#include <vector>     // For std::vector
#include <algorithm>  // For std::sort
using namespace std; // For brevity in examples

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9};
    cout << "Original vector: ";
    for (int n : numbers) {
        cout << n << " ";
    }
    cout << endl;

    sort(numbers.begin(), numbers.end()); // Sort the vector

    cout << "Sorted vector: ";
    for (int n : numbers) {
        cout << n << " ";
    }
    cout << endl;
    return 0;
}`
    },
    {
      title: "Pointers and References",
      content: "Pointers store memory addresses, allowing direct memory manipulation. References are aliases for existing variables; they must be initialized and cannot be reassigned. Both are crucial for dynamic memory management and efficient function passing. This snippet shows basic usage.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream> // For cout and endl
using namespace std; // For brevity in examples

int main() {
    int value = 10;
    int* ptr = &value; // Pointer stores address of 'value'
    int& ref = value;  // Reference is an alias for 'value'

    cout << "Value: " << value << endl;
    cout << "Pointer dereference (*ptr): " << *ptr << endl;
    cout << "Reference (ref): " << ref << endl;

    *ptr = 20; // Change value through pointer
    cout << "Value after pointer change: " << value << endl;

    ref = 30; // Change value through reference
    cout << "Value after reference change: " << value << endl;
    return 0;
}`
    },
    {
      title: "Memory Management (new/delete)",
      content: "C++ provides `new` and `delete` operators for dynamic memory allocation and deallocation on the heap. This allows for flexible memory usage, especially for data structures whose size isn't known at compile time. Failure to use `delete` leads to memory leaks. This example demonstrates allocating and deallocating a single integer and an array.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream> // For cout and endl
using namespace std; // For brevity in examples

int main() {
    int* dynamicInt = new int; // Allocate an integer on the heap
    *dynamicInt = 100;
    cout << "Dynamic int: " << *dynamicInt << endl;
    delete dynamicInt;       // Deallocate memory
    dynamicInt = nullptr;    // Good practice to nullify after delete

    // Dynamic array
    int* dynamicArray = new int[5]; // Allocate an array of 5 integers
    for (int i = 0; i < 5; ++i) {
        dynamicArray[i] = (i + 1) * 10;
    }
    cout << "Dynamic array elements: ";
    for (int i = 0; i < 5; ++i) {
        cout << dynamicArray[i] << " ";
    }
    cout << endl;
    delete[] dynamicArray; // Deallocate dynamic array
    dynamicArray = nullptr;
    return 0;
}`
    },
    {
      title: "Inheritance Types and Access Specifiers",
      content: "Inheritance can be `public`, `protected`, or `private`. Access specifiers (`public`, `protected`, `private`) control visibility of members. `public` members are accessible everywhere. `protected` members are accessible within the class and derived classes. `private` members are only accessible within the class itself. This example highlights access from a derived class.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream> // For cout and endl
using namespace std; // For brevity in examples

class Base {
protected:
    int protectedVar = 10;
private:
    int privateVar = 20; // Not accessible in derived or main
public:
    int publicVar = 30;
};

class Derived : public Base { // Public inheritance
public:
    void display() {
        cout << "Protected var in Derived: " << protectedVar << endl;
        // cout << privateVar; // ERROR: privateVar is not accessible here
        cout << "Public var in Derived: " << publicVar << endl;
    }
};

int main() {
    Derived d;
    d.display();
    cout << "Public var from main: " << d.publicVar << endl;
    return 0;
}`
    },
    {
      title: "Function Overloading and Overriding",
      content: "Overloading: Multiple functions with the same name but different parameters (number, type, order) within the *same scope*. Overriding: A derived class provides a specific implementation for a function that is already defined in its base class. This demonstrates both concepts.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream> // For cout and endl
using namespace std; // For brevity in examples

// Function Overloading
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

// Function Overriding
class BaseVehicle {
public:
    virtual void move() { // 'virtual' enables overriding behavior
        cout << "Vehicle moves." << endl;
    }
    virtual ~BaseVehicle() {} // Good practice: virtual destructor
};

class Car : public BaseVehicle {
public:
    void move() override { // 'override' keyword (C++11) for clarity
        cout << "Car drives." << endl;
    }
};

int main() {
    cout << "Overloading (int): " << add(5, 3) << endl;
    cout << "Overloading (double): " << add(5.5, 3.3) << endl;

    BaseVehicle* v = new Car(); // Polymorphic call
    v->move(); // Calls Car's move() due to virtual function and polymorphism
    delete v; // Clean up allocated memory
    return 0;
}`
    },
    {
      title: "File Handling (fstream)",
      content: "C++ uses streams for I/O operations. `fstream` (from `<fstream>` header) allows simultaneous input and output operations on files. `ofstream` is for writing, `ifstream` for reading. Remember to open and close files properly. This example writes to and then reads from a file.",
      code: `// Requires #include <iostream>, <fstream>, <string> and main() to run
#include <iostream> // For cout, cerr, endl
#include <fstream>  // For file stream operations (ofstream, ifstream)
#include <string>   // For std::string and getline
using namespace std; // For brevity in examples

int main() {
    // Writing to a file
    ofstream outFile("example.txt");
    if (outFile.is_open()) {
        outFile << "Hello from C++!\\n"; // Use \\n for newline in string literal
        outFile << "This is a test line.\\n";
        outFile.close();
        cout << "Data written to example.txt" << endl;
    } else {
        cerr << "Error opening file for writing." << endl;
    }

    // Reading from a file
    ifstream inFile("example.txt");
    if (inFile.is_open()) {
        string line;
        cout << "\\nReading from example.txt:\\n";
        while (getline(inFile, line)) { // Read line by line
            cout << line << endl;
        }
        inFile.close();
    } else {
        cerr << "Error opening file for reading." << endl;
    }
    return 0;
}`
    },
    {
      title: "Exceptions Handling",
      content: "Exceptions provide a way to react to unusual or erroneous situations gracefully. C++ uses `try`, `catch`, and `throw` keywords. `try` block contains code that might throw an exception. `throw` initiates an exception. `catch` block handles the exception. This example demonstrates handling division by zero.",
      code: `// Requires #include <iostream>, <stdexcept> and main() to run
#include <iostream>  // For cout, cerr, endl
#include <stdexcept> // For standard exception classes like runtime_error
using namespace std; // For brevity in examples

double divide(double numerator, double denominator) {
    if (denominator == 0) {
        throw runtime_error("Division by zero is not allowed!");
    }
    return numerator / denominator;
}

int main() {
    try {
        double result = divide(10.0, 2.0);
        cout << "10 / 2 = " << result << endl;

        result = divide(10.0, 0.0); // This will throw an exception
        cout << "This line will not be executed." << endl; // This line is skipped
    } catch (const runtime_error& e) { // Catch specific exception type
        cerr << "Caught exception: " << e.what() << endl;
    } catch (...) { // Catch-all handler for any other exception
        cerr << "Caught an unknown exception." << endl;
    }
    return 0;
}`
    },
    {
      title: "Templates",
      content: "Templates allow writing generic programs and classes that work with different data types without rewriting the code for each type. They are a powerful feature for achieving code reusability and type safety. This example shows a template function and a template class.",
      code: `// Requires #include <iostream> and main() to run
#include <iostream> // For cout and endl
#include <string>   // For std::string if using string template
using namespace std; // For brevity in examples

template <typename T> // Template function for any type T
T add(T a, T b) {
    return a + b;
}

template <typename T> // Template class definition
class MyPair {
public:
    T first;
    T second;
    MyPair(T f, T s) : first(f), second(s) {} // Constructor
    void display() {
        cout << "Pair: (" << first << ", " << second << ")" << endl;
    }
};

int main() {
    cout << "Sum of ints: " << add(5, 10) << endl;
    cout << "Sum of doubles: " << add(5.5, 10.1) << endl;

    MyPair<int> p1(1, 2); // Instantiate MyPair with int
    p1.display();
    MyPair<string> p2("Hello", "World"); // Instantiate MyPair with string
    p2.display();
    return 0;
}`
    }
  ],
  };
export default cppNotes;
