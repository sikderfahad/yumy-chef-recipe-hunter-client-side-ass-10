import ReactPDF, {
  BlobProvider,
  Document,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import { Link } from "react-router-dom";
import PdfButton from "../PdfButton/PdfButton";

export const MyPDF = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>
      <Text style={styles.subtitle}>
        Tell us the differences between uncontrolled and controlled components?
      </Text>
      <Text style={styles.text}>
        Uncontrolled Components: Form input values and state are managed by the
        DOM, not React component state.Values are accessed using DOM queries or
        references.No explicit event handling for updates.Initial values are set
        using the defaultValue attribute.Typically used for simpler forms where
        precise control is not required. Controlled components: State is managed
        by React component state.Values are accessed and controlled through the
        component state.Event handlers are used to update the component state
        when values change.Initial values are set using the value
        attribute.Offers precise control and validation options.Suitable for
        complex forms where you need granular control over input values.
      </Text>

      <Text style={styles.subtitle} break>
        How to validate React props using PropTypes?
      </Text>
      <Text style={styles.text}>
        Import the PropTypes module: Import PropTypes from the 'prop-types'
        package.Define prop types: Inside your component, define the prop types
        using the propTypes static property.Specify the prop types: Use
        PropTypes validators to specify the type and requirements for each
        prop.Perform prop validation: During development, React automatically
        validates the provided props based on the defined prop types and
        displays warnings in the browser's console if a prop doesn't match the
        specified type or requirements.Optional: Set default prop values: If
        desired, you can use the defaultProps static property to provide default
        values for certain props.
      </Text>

      <Text style={styles.subtitle} break>
        Tell us the difference between nodejs and express js?
      </Text>
      <Text style={styles.text}>
        Node.js is a JavaScript runtime environment that allows running
        JavaScript code on the server-side. It provides an event-driven,
        non-blocking I/O model for efficient handling of concurrent requests.
        Node.js enables building server-side applications using JavaScript and
        has a large ecosystem of modules and libraries available through
        npm.Express.js, on the other hand, is a web application framework built
        on top of Node.js. It provides a minimalist architecture for creating
        APIs, web services, and server-side web applications. Express.js
        simplifies tasks like routing, middleware support, and request/response
        handling, making it easier to build web applications. It leverages the
        capabilities of Node.js and provides a streamlined approach for handling
        HTTP requests and building web servers.
      </Text>

      <Text style={styles.subtitle} break>
        What is a custom hook, and why will you create a custom hook?
      </Text>
      <Text style={styles.text}>
        A custom hook in React is a reusable function that allows you to
        encapsulate and share logic between components. It is created by
        prefixing the function name with 'use' and follows a specific naming
        convention. Custom hooks are useful for promoting code reusability,
        abstracting complex logic, separating concerns, facilitating testing and
        debugging, and leveraging React's features. They help improve code
        organization, maintainability, and modularity in React applications.
      </Text>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export const PDFDownloadButton = () => (
  <BlobProvider document={<MyPDF />}>
    {({ blob, url, loading, error }) => (
      <div>
        {loading ? (
          "Loading document..."
        ) : (
          <a href={url} download="my-document.pdf">
            <PdfButton></PdfButton>
          </a>
        )}
      </div>
    )}
  </BlobProvider>
);
