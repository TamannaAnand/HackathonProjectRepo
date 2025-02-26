function fetchSafetyChecks() {
    const safetyChecks = [
        { id: 1, name: 'Inspection 1', status: 'Complete' },
        { id: 2, name: 'Inspection 2', status: 'Incomplete' },
        { id: 3, name: 'Inspection 3', status: 'Complete' },
        { id: 4, name: 'Inspection 4', status: 'Incomplete' },
        { id: 5, name: 'Inspection 5', status: 'Complete' },
    ];

    return safetyChecks; // Simulate returning the data
}

test('returns the correct number of inspections', async () => {
    // Call the function that fetches 
    const safetyChecks = fetchSafetyChecks()
    expect(safetyChecks.length).toBe(5); // Expected number of records is 5
  });

  test('returns the status of each inspection', async () => {
    // Call the function that fetches 
    const safetyChecks = fetchSafetyChecks()
    expect(safetyChecks[0].status).toBe('Complete'); 
    expect(safetyChecks[1].status).toBe('Incomplete');
    expect(safetyChecks[2].status).toBe('Complete');
    expect(safetyChecks[3].status).toBe('Incomplete');
    expect(safetyChecks[4].status).toBe('Complete');
  });
