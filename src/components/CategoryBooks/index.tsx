import { Col, Container, Row } from 'react-bootstrap';

import { Category } from '@/types';
import { BookCategoryView } from '@/components/Book';

import { lookUpBookById, lookUpBookIdsByCategory } from '@/utils';

type Props = {
    category: Category;
};

export function CategoryBooks({ category }: Props) {
    const bookIds: string[] = lookUpBookIdsByCategory(category);
    if (typeof bookIds === 'undefined') {
        notFound();
    }
    const books: Book[] = bookIds.map((bookId: BookID) =>
        lookUpBookById(bookId)
    );

    return (
        <Container>
            <Row>
                {books.map((book: Book) => (
                    <Col lg={3} key={book.id}>
                        <BookCategoryView book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}