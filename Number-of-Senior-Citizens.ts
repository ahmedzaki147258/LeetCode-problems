const countSeniors = (details: string[]): number => details.map(detail => +detail.substring(11, 13)).filter(age => age > 60).length;
