import React, {Component} from 'react';
import {Document, Page} from 'react-pdf';
import Button from 'react-bootstrap/Button';
import resume from '../AkshayP_WDev_2908.pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
 state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  goToPrevPage = () =>
    					this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    					this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div className="tc">
        <nav className="pa2">
          <Button variant="dark" className="ma2" onClick={this.goToPrevPage}>Prev</Button>
          <Button variant="dark" className="ma2" onClick={this.goToNextPage}>Next</Button>
        </nav>

        <div className="o-80" style={{ width: '50%' , margin:'auto', padding:'10px' }}>
          <Document 
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p style={{color:'white'}}>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}


export default Resume;