"use client";

import { useState } from "react";
import styles from "./CopyEmail.module.css";

type CopyEmailProps = {
  email: string;
};

export function CopyEmail({ email }: CopyEmailProps) {
  const [feedback, setFeedback] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setFeedback("Copied");
      setTimeout(() => setFeedback(""), 2500);
    } catch {
      // Fallback
      setFeedback("Selected. Press Ctrl+C");
    }
  };

  return (
    <div className={styles.contactBox}>
      <div className={styles.addrRow}>
        <span id="addr" className={styles.emailText}>
          {email}
        </span>
        <button
          id="copy"
          type="button"
          onClick={handleCopy}
          className={styles.copyBtn}
          aria-label="Copy email address"
        >
          <svg
            className={styles.copyIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <span>Copy email</span>
        </button>
      </div>

      <span id="copied" className={styles.feedback} aria-live="polite">
        {feedback}
      </span>
    </div>
  );
}
