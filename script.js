document.getElementById("salary-form").addEventListener("submit", function (e) {
    e.preventDefault();
    calculateSalary();
});

function calculateSalary() {
    const hourlyWage = parseFloat(document.getElementById("hourly-wage").value);
    const hoursWorked = parseFloat(document.getElementById("hours-worked").value);
    const overtimeHours = parseFloat(document.getElementById("overtime-hours").value);
    const taxRate = parseFloat(document.getElementById("tax-rate").value);

    if (isNaN(hourlyWage) || isNaN(hoursWorked) || isNaN(overtimeHours) || isNaN(taxRate) ||
        hoursWorked < 0 || overtimeHours < 0 || taxRate < 0) {
        document.getElementById("result").textContent = "Invalid input. Please enter valid values.";
        return;
    }

    const regularSalary = hourlyWage * hoursWorked;
    const overtimeSalary = hourlyWage * 1.5 * overtimeHours;
    const grossSalary = regularSalary + overtimeSalary;
    const taxes = (grossSalary * (taxRate / 100));
    const netSalary = grossSalary - taxes;

    document.getElementById("result").textContent = `Alga: ${netSalary.toFixed(2)} EUR`;
}
