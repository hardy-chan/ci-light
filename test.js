const isValidDatasetName = require('./validator');

console.log('[INFO] Running automated unit test suite...');

// Test Case 1: Valid name (longer than 3 characters, no spaces)
if (isValidDatasetName('clinical_trial_data') !== true) {
  console.error('[FAIL] Test 1: Compliant dataset name was marked invalid');
  process.exit(1); 
}

// Test Case 2: Invalid name (violates minimum length)
if (isValidDatasetName('abc') !== false) {
  console.error('[FAIL] Test 2: Short dataset name was allowed');
  process.exit(1); 
}

// Test Case 3: Invalid name (contains empty spaces)
if (isValidDatasetName('clinical trial data') !== false) {
  console.error('[FAIL] Test 3: Dataset name containing empty spaces was allowed');
  process.exit(1); 
}

// All test assertions passed successfully
console.log('[SUCCESS] All unit testing assertions passed!');
process.exit(0); 
