export function calculateTurnoverAndProfit(orders, month, year, profitMargin) {
    const completedOrders = orders.filter((order) => {
        const [day, monthStr, yearStr] = order.orderDate.split('/');
        return (
            order.status === 'Completed' &&
            parseInt(monthStr) === month &&
            parseInt(yearStr) === year
        );
    });

    const turnover = completedOrders.reduce(
        (total, order) => total + order.orderValue,
        0
    );

    const profit = turnover * profitMargin;

    return {
        turnover: turnover.toFixed(2),
        profit: profit.toFixed(2),
        numberOfOrders: completedOrders.length,
    };
}
