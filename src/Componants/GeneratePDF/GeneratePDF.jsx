import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: "Helvetica" },
  imageContainer: { display: "flex" , alignItems: "center", marginBottom: 10 },
  image: { width: 60, height: 60 }, // ✅ ضبط حجم الصورة وجعلها دائرية
  header: { textAlign: "center", marginBottom: 20  ,padding:5 },
  name: { fontSize: 25, fontFamily: "Helvetica-Bold", marginBottom: 5 },
  contact: { fontSize: 15, color: "gray", marginBottom: 3 },
  section: { marginBottom: 15, borderBottom: "2px solid #ddd", paddingBottom: 10  },
  sectionTitle: { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#0C0950", marginBottom: 5 , padding:5 , fontWeight:"bold" },
  text: { fontSize: 13, lineHeight: 1.5 , margin:3 , padding:3 },
  experience: { marginBottom: 10 },
  boldText: { fontFamily: "Helvetica-Bold" , margin:3 , padding:3 , color:"#504B38" },
});

const GeneratePDF = ({ cvData, imgFile }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* ✅ صورة المستخدم */}
      {imgFile && (
        <View style={styles.imageContainer}>
          <Image src={imgFile} style={styles.image} />
        </View>
      )}

      {/* ✅ الاسم والمعلومات الشخصية */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {cvData.firstName || "First Name"} {cvData.lastName || "Last Name"}
        </Text>
        <Text style={styles.contact}>{cvData.email || "email@example.com"}</Text>
        <Text style={styles.contact}>{cvData.phoneNumber || "+201234567890"}</Text>
        <Text style={styles.contact}>
          {cvData.address || "Address"}, {cvData.city || "City"}
        </Text>
      </View>

      {/* ✅ قسم "الملخص الاحترافي" */}
      {cvData.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary :</Text>
          <Text style={styles.text}>{cvData.summary}</Text>
        </View>
      )}

      {/* ✅ قسم "المهارات" */}
      {cvData.skills && cvData.skills.trim() !== "" && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills :</Text>
          {cvData.skills.split(",").map((skill, index) => (
            <Text key={index} style={styles.text}>
              • {skill.trim()}
            </Text>
          ))}
        </View>
      )}

      {/* ✅ قسم "الخبرات العملية" */}
      {cvData.experience && cvData.experience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience :</Text>
          {cvData.experience.map((exp, index) => (
            <View key={index} style={styles.experience}>
              <Text style={styles.boldText}>
                {exp.jobTitle || "N/A"} at {exp.employer || "N/A"}
              </Text>
              <Text style={styles.text}>
                {exp.city || "N/A"} ({exp.startDate || "N/A"} - {exp.endDate || "N/A"})
              </Text>
              <Text style={styles.text}>_{exp.jobDescription || "N/A"}</Text>
            </View>
          ))}
        </View>
      )}

      {/* ✅ قسم "التعليم" */}
      {cvData.education && cvData.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education :</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={styles.experience}>
              <Text style={styles.boldText}>
                {edu.degree || "N/A"} at {edu.institution || "N/A"}
              </Text>
              <Text style={styles.text}>
                 {edu.city || "N/A"} ({edu.startDate || "N/A"} - {edu.endDate || "N/A"})
              </Text>
              <Text style={styles.text}>{edu.description || "N/A"}</Text>
            </View>
          ))}
       
        </View>
      )}
    </Page>
  </Document>
);

export default GeneratePDF;

