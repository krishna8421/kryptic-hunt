import { Document, Page } from 'react-pdf';

export default function Guide() {
    return (
        <Document file="public/guide.pdf">
            <Page pageNumber={1} />
        </Document>
    );
}