import { Container, Row } from "react-bootstrap"
import { TodoInput } from "../components/TodoInput"
import { TodoList } from "../components/TodoList"

export const MainPage = () => {
    return (
        <Container className="mx-auto mt-5">
            <Row>
                <h1>TODO App</h1>
            </Row>
            <Row className="py-3">
                <TodoInput />
            </Row>
            <Row>
                <TodoList />
            </Row>
        </Container>
    )
}