import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RefundPolicy: React.FC = () => {
  return (
    <div className="p-6 sm:p-10 md:p-16 lg:p-20">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-red-500 text-3xl font-bold">Refund Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Welcome to TheHomy's Refund Policy</h2>
          <p className="mb-4">
            This is a guideline governing the terms and conditions related to refunds for our services. Your engagement with our
            services indicates your agreement to adhere to these policies.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Initiation of Services</h2>
          <p className="mb-4">
            Once services have commenced, we regret to inform you that no refunds will be entertained. This includes instances where
            the services have been partially or entirely provided.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Cancellation of Services</h2>
          <p className="mb-4">
            In cases of service cancellations before initiation, we understand that circumstances may arise. While refunds are not
            guaranteed, we are open to considering them based on individual situations. To initiate a refund request, please submit
            a written request to [support@thehomy.in] within [2 days] of the cancellation notification.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Eligibility for Refund</h2>
          <p className="mb-4">
            Refunds are at the sole discretion of TheHomy and will be assessed on a case-by-case basis. We recognize that each
            situation is unique, and therefore, refunds are not assured. The decision to refund will depend on factors such as
            the nature of the service and the reason for cancellation.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">No Refunds After Initiation</h2>
          <p className="mb-4">
            Once our services have been initiated, encompassing activities like house cleaning, or cooking services, we are unable
            to process any refunds. We appreciate your understanding in this matter.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Processing Time</h2>
          <p className="mb-4">
            The duration for processing refunds may vary and is contingent upon individual circumstances. If a refund is approved,
            we will endeavor to process it using the original payment method whenever feasible. We appreciate your patience during
            this process.
          </p>

          <p className="mb-4">
            For any further inquiries or clarification regarding our Refund Policy, feel free to reach out to our dedicated team at
            [support@thehomy.in].
          </p>

          <p className="mb-4">
            Thank you for choosing TheHomy for your service needs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RefundPolicy;