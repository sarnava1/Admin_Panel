const login = require("./login")
// @ponicode
describe("login", () => {
    test("0", () => {
        let callFunction = () => {
            login({ email: { email: "user1+user2@mycompany.com", password: "NoWiFi4you" }, password: { email: "email@Google.com", password: "$p3onyycat" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            login({ email: { email: "user@host:300", password: "$p3onyycat" }, password: { email: "email@Google.com", password: "NoWiFi4you" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            login({ email: { email: "email@Google.com", password: "accessdenied4u" }, password: { email: "email@Google.com", password: "accessdenied4u" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            login({ email: { email: "user1+user2@mycompany.com", password: "NoWiFi4you" }, password: { email: "user1+user2@mycompany.com", password: "accessdenied4u" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            login({ email: { email: "something.example.com", password: "NoWiFi4you" }, password: { email: "something@example.com", password: "$p3onyycat" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            login(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
