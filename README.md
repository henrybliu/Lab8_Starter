# Lab 8 - Starter

<b>1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.</b>

In the Recipe project development pipeline, it would be recommended to place automated tests within a GitHub action that runs whenever code is pushed. This approach ensures continuous integration and provides early feedback on code quality. Running tests automatically in the CI process saves time and effort compared to manual testing. It promotes collaboration among team members, enables scalability as the project grows, and enhances the reliability of API integrations. By catching issues early, addressing them promptly, and maintaining code quality, this approach contributes to the successful development and deployment of the Recipe project.

<b>2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)</b>

No. End-to-end tests are designed to simulate real user scenarios and validate the system as a whole, typically involving multiple components and interactions.

<b>3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.</b>

No, the "message" feature of a messaging application involves multiple components and interactions that cannot be adequately tested through unit tests alone. Testing the feature requires verifying various aspects, such as the accurate storage of user-entered messages, proper transmission to the intended recipient, and ensuring the message retains its content. Given the complexity and interconnected nature of these components, it is more suitable to employ end-to-end (E2E) testing. E2E testing allows for comprehensive testing of the entire message workflow, ensuring the feature functions as intended and all components work together seamlessly.

<b> 4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. </b>

Yes, I would utilize a unit test to verify the functionality of the "max message length" feature in a messaging application. This feature can be isolated since it encompasses a specific rule or constraint regarding the message length. By employing a unit test, I can concentrate solely on this particular functionality without any dependencies on other system components.
