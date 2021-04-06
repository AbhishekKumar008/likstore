import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from './styles';

const About = () => {
  return (
    <>
      <View style={styles.aboutContainer}>
        <View>
          <Text style={styles.headingText}>Email List cleaning</Text>
          <Text style={styles.subheading}>
            Copy-paste email addresses or upload a CSV file of email addresses
            to clean and validate the list in bulk. This free email cleaning
            tool by Grorapid helps businesses to have a list of valid and
            verified email addresses and avoid spams, bounces and complaints
            from their audience.
          </Text>
        </View>
        <View>
          <Text style={styles.headingText}>How does this work?</Text>
          <Text style={styles.subheading}>
            This tool validates the email format, check for Domain validity,
            check for disposable mailboxes, check for Spam domains and use SMTP
            authentication to check the validity of the email addresses and
            verifies your audience list.{' '}
          </Text>
        </View>
        <View>
          <Text style={styles.headingText}>FAQs</Text>
          <View>
            <Text style={styles.headingText}>
              Why email cleaning is important?
            </Text>
            <Text style={styles.subheading}>
              Email cleaning and validation helps in reducing bounces, spams and
              complaints for your email marketing and cold reachouts. Email list
              cleaning helps in increasing overall email deliverability and
              improve your email open rates.
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}>
              How does this work? Do you send email to verify the email address?
            </Text>
            <Text style={styles.subheading}>
              No email is actually sent for the email verification. We use 5
              step process for the email verification - Email format and syntax,
              Valid Domain, Temporary or disposable email inboxes, MX Records
              checkup, SMTP authentication. This process provides maximum
              accuracy of email validation.
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}>
              What is the output of email list cleaning? What does the statuses
              mean?
            </Text>
            <Text style={styles.subheading}>
              a. Valid - The email is 100% deliverable, safe to send and can be
              used for the marketing or sales purposes.
              {'\n'}
              b. Invalid - The email address can be part of disposable
              mailboxes, incorrect syntax or MX records don’t exist.
              {'\n'}
              c. Risky - Domain is not reachable for the email address and is
              risky to send the email.
              {'\n'}
              d. Unknown - In case the email type is accept-all or firewall
              block the SMTP authentication. These email addresses are
              approximately 80% accurate.
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}>
              What is the limit of bulk email list upload?
            </Text>
            <Text style={styles.subheading}>
              We allow upto 500 email addresses in one go to avoid overloading
              the servers and balance the sanity of the tool. You can upload
              multiple lists one by one to clean in bulk. However, if you need
              support for large datasets, feel free to reach us at
              hello@grorapid.com
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}>
              Do you share the email lists or use them for other purposes?
            </Text>
            <Text style={styles.subheading}>
              No way! We respect your privacy and the data associated with it.
              Your data is never shared with anyone or used for any other
              purpose. We run our own Email Marketing platform to support
              businesses in their email marketing and are compliant with data
              privacy laws.
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}>
              How accurate are the email validation and verification results
              from this tool?
            </Text>
            <Text style={styles.subheading}>
              The accuracy of the results is around 98% for uploaded email
              addresses. In case of enterprise-grade secure email servers, our
              tool gives result as Unknown.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',   
    color: COLORS.main,
    marginTop:20,
    padding:20
  },
  subheading: {
    textAlign: 'center',
    color: COLORS.text,
    fontSize: 18,
    padding:  20,
    paddingTop:0,
  },
});

export default About;
