import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>MY APP</Text>

          <Pressable style={styles.menuButton}>
            <Text style={styles.menuText}>☰</Text>
          </Pressable>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.badge}>WELCOME</Text>

          <Text style={styles.heading}>
            Build something{'\n'}
            <Text style={styles.headingAccent}>amazing.</Text>
          </Text>

          <Text style={styles.description}>
            A clean and modern mobile experience built from scratch with
            React Native and Expo.
          </Text>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                Get Started
              </Text>
            </Pressable>

            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>
                Learn More
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Features */}
        <View style={styles.features}>
          <Text style={styles.sectionTitle}>Why this app?</Text>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>⚡</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Fast</Text>
              <Text style={styles.cardDescription}>
                Designed for a smooth and responsive experience.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>✨</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Simple</Text>
              <Text style={styles.cardDescription}>
                Clean interface without unnecessary complexity.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>🚀</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Powerful</Text>
              <Text style={styles.cardDescription}>
                Built with modern tools and ready to grow.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollContent: {
    paddingBottom: 40,
  },

  /* Header */
  header: {
    height: 64,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },

  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    fontSize: 20,
  },

  /* Hero */
  hero: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 50,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 20,
  },

  heading: {
    fontSize: 46,
    lineHeight: 52,
    fontWeight: '800',
    color: '#111827',
  },

  headingAccent: {
    color: '#4f46e5',
  },

  description: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 27,
    color: '#6b7280',
    maxWidth: 500,
  },

  /* Buttons */
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 30,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: '#4f46e5',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
  },

  /* Features */
  features: {
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 18,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
  },

  cardIcon: {
    fontSize: 28,
    marginRight: 16,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7280',
  },
});