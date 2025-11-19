import { parse, format, formatDistance, subMonths, subDays, isValid } from 'date-fns';

type FormatType = 'distance' | 'short' | 'long' | 'iso' | string;

/**
 * Universal date formatter that handles multiple input formats
 * @param dateInput - Can be a Date object, ISO string, timestamp, or custom format like "16 Aug 2024" or "3 months ago"
 * @param formatType - Format type: 'distance' (default), 'short', 'long', 'iso', or custom format string
 * @returns Formatted date string
 */
export function formatDate(
  dateInput: string | Date | number,
  formatType: FormatType = 'distance'
): string {
  let parsedDate: Date;

  // If already a Date object
  if (dateInput instanceof Date) {
    parsedDate = dateInput;
  } 
  // If it's a timestamp (number)
  else if (typeof dateInput === 'number') {
    parsedDate = new Date(dateInput);
  } 
  else {
    // Handle "X months ago" format
    const monthsAgoMatch = dateInput.match(/(\d+)\s+months?\s+ago/i);
    if (monthsAgoMatch) {
      const monthsAgo = parseInt(monthsAgoMatch[1]);
      parsedDate = subMonths(new Date(), monthsAgo);
    } 
    // Handle "X days ago" format
    else if (dateInput.match(/(\d+)\s+days?\s+ago/i)) {
      const daysAgoMatch = dateInput.match(/(\d+)\s+days?\s+ago/i);
      const daysAgo = parseInt(daysAgoMatch![1]);
      parsedDate = subDays(new Date(), daysAgo);
    }
    // Handle "X years ago" format
    else if (dateInput.match(/(\d+)\s+years?\s+ago/i)) {
      const yearsAgoMatch = dateInput.match(/(\d+)\s+years?\s+ago/i);
      const yearsAgo = parseInt(yearsAgoMatch![1]);
      parsedDate = new Date();
      parsedDate.setFullYear(parsedDate.getFullYear() - yearsAgo);
    }
    // Try parsing as ISO date or standard date string
    else if (dateInput.includes('-') || dateInput.includes('T') || dateInput.includes('/')) {
      parsedDate = new Date(dateInput);
    }
    // Handle "DD MMM YYYY" format (e.g., "16 Aug 2024")
    else {
      try {
        parsedDate = parse(dateInput, 'd MMM yyyy', new Date());
      } catch (error) {
        // Try other common formats
        try {
          parsedDate = parse(dateInput, 'dd MMM yyyy', new Date());
        } catch {
          try {
            parsedDate = parse(dateInput, 'MMM d, yyyy', new Date());
          } catch {
            console.error(`Failed to parse date: ${dateInput}`);
            parsedDate = new Date(); // Fallback to current date
          }
        }
      }
    }
  }

  // Validate the parsed date
  if (!isValid(parsedDate)) {
    console.error(`Invalid date: ${dateInput}`);
    return 'Invalid date';
  }

  // Format based on type
  switch (formatType) {
    case 'distance':
      return formatDistance(parsedDate, new Date(), { addSuffix: true });
    case 'short':
      return format(parsedDate, 'MMM dd, yyyy');
    case 'long':
      return format(parsedDate, 'MMMM dd, yyyy');
    case 'iso':
      return format(parsedDate, 'yyyy-MM-dd');
    default:

      return format(parsedDate, formatType);
  }
}